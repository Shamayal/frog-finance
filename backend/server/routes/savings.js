const router = require("express").Router();
const db = require('../db/connection.js');
const { getCurrentSavingsGoalAfterUpdate, getFinishedSavingsGoal, createNewSavingsGoal } = require('../db/queries/getSavingsQueries');

// Show the current savings goal
router.get("/", (req, res) => {
  const user_id = 1;
  getCurrentSavingsGoalAfterUpdate(user_id)
  .then((goal) => {
    res.send({ message: 'Here are the current savings goals:', current_savings_goal: goal });
  })
    .catch((err) => {
      console.log(err.message);
    });
})


// Show the completed savings goals
router.get("/complete", (req, res) => {
  const user_id = 1;
  getFinishedSavingsGoal(user_id)
    .then((result) => {
      res.send({ message: 'Here are the completed savings goals:', completed_savings_goals: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


// Create a new savings goals
router.post("/new", (req, res) => {
  const {savings_name, goal_amount} = req.body;
  console.log("check req body", req.body)
  const user_id = 1;

  createNewSavingsGoal(savings_name, goal_amount, user_id)
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

