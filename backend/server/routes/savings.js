const router = require("express").Router();

module.exports = db => {
  const protocol = request.protocol;
  const host = request.hostname;
  const port = process.env.PORT || 8001;
  const serverUrl = `${protocol}://${host}:${port}`;


  // Show the current savings goal
  router.get("/", (request, response) => {
    db.query(`
    SELECT savings.saving_name, savings.goal_amount, savings.date_created,
      (SELECT SUM(amount) FROM income WHERE user_id = savings.user_id) -
      ((SELECT SUM(amount) FROM debt_payments WHERE user_id = savings.user_id) +
      (SELECT SUM(amount) FROM expenses WHERE user_id = savings.user_id))
    AS current_amount
    FROM savings
    JOIN users ON users.id = savings.user_id
    WHERE finished = FALSE
    AND users.id = savings.user_id;
    `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  })



  // Show the completed savings goals
  router.get("/complete", (request, response) => {
    db.query(`
  SELECT savings.saving_name, savings.goal_amount, savings.date_created, savings.date_finished, savings.current_amount
  FROM savings
  JOIN users ON users.id = savings.user_id
  WHERE finished = TRUE
  AND users.id = savings.user_id;
  `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });


    // Create a new savings goals
    router.post("/new", (req, response) => {
      const [saving_name, goal_amount, current_amount ]  = req.params;
      const user_id = 1;

      db.query(`
      INSERT INTO savings (saving_name, goal_amount, current_amount, finished, date_created, date_finished, user_id)
      VALUES ('$1', $2, $3, FALSE, CURRENT_DATE, NULL, $4), [savings_name, goal_amount, current_amount, user_id];
    `)
        .then((result) => {
          return result.rows;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
}

// issue: when current_amount = goal_amount, stop adding to current amount. switch false to true. start a new goal and add the current_amount to the new goal.
// WHEN goal = current finished = true ?

// issue: when making a new goal, user enters current amount? or should it transfer over from the previous goal that was reached.
  // ie you had 100 left out of a 2000 goal, but your savings for that month was 500. how to get the extra 400 transfer to the new one?
  // post route -> current_amount


// add -> amount left?


// to do: remove savings prefix
