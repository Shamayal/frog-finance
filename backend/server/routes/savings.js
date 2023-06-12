const router = require("express").Router();
const db = require('../db/connection.js');


// Show the current savings goal
router.get("/", (req, res) => {
  db.query(`
    SELECT savings.saving_name, savings.goal_amount,
      (SELECT SUM(amount) FROM income WHERE user_id = savings.user_id) -
      ((SELECT SUM(amount) FROM debt_payments WHERE user_id = savings.user_id) +
      (SELECT SUM(amount) FROM expenses WHERE user_id = savings.user_id))
    AS current_amount,
    to_char(date_created, 'YYYY-MM-DD') AS date_created,
    finished
    FROM savings
    JOIN users ON users.id = savings.user_id
    WHERE finished = FALSE
    AND users.id = savings.user_id;
    `)
    .then((result) => {
      res.send({ message: 'Here are the current savings goals:', current_savings_goals: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
})



// Show the completed savings goals
router.get("/complete", (req, res) => {
  db.query(`
  SELECT savings.saving_name, savings.goal_amount, savings.current_amount, to_char(savings.date_created, 'YYYY-MM-DD') AS date_created,
  to_char(savings.date_created, 'YYYY-MM-DD') AS date_finished, finished
  FROM savings
  JOIN users ON users.id = savings.user_id
  WHERE finished = TRUE
  AND users.id = savings.user_id;
  `)
    .then((result) => {
      res.send({ message: 'Here are the completed savings goals:', completed_savings_goals: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


// Create a new savings goals
router.post("/new", (req, res) => {
  const [savings_name, goal_amount, current_amount] = req.params;
  const user_id = 1;

  db.query(`
      INSERT INTO savings (saving_name, goal_amount, current_amount, finished, date_created, date_finished, user_id)
      VALUES ('$1', $2, $3, FALSE, CURRENT_DATE, NULL, $4
      RETURNING *;
      `,
    [savings_name, goal_amount, current_amount, user_id]
  )
    .then((result) => {
      res.send({ message: 'Here is the new savings goal you just made:', new_savings_goals: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;

// issue: when current_amount = goal_amount, stop adding to current amount. switch false to true. start a new goal and add the current_amount to the new goal.
// WHEN goal = current finished = true ?

// issue: when making a new goal, user enters current amount? or should it transfer over from the previous goal that was reached.
  // ie you had 100 left out of a 2000 goal, but your savings for that month was 500. how to get the extra 400 transfer to the new one?
  // post route -> current_amount


// add -> amount left?

