const router = require("express").Router();
const db = require('../db/connection.js');
const { getCurrentDebtGoals, getPaidOffDebts, createNewDebtGoal, createDebtPayment } = require('../db/queries/getDebtQueries');

// Show the current debt goals
router.get("/", (req, res) => {
  const user_id = 1;
  getCurrentDebtGoals(user_id)
    .then((result) => {
      // patch
      // db update query
      // check the returned values - if the same, update the db, then:
      res.send({ message: 'Here are the current debts to be paid:', current_debt: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


// Show the debts that have been fully paid off
router.get("/paidoff", (req, res) => {
  const user_id = 1;

  getPaidOffDebts(user_id)
    .then((result) => {
      res.send({ message: 'View all your paidoff debts:', paid_off_debt: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Make a new debt goal
// issue -> amount paid showing as null
router.post("/new", (req, res) => {
  const [name, initial_amount, amount_left, interest_rate] = req.params;
  const user_id = 1;
  createNewDebtGoal(name, initial_amount, amount_left, interest_rate, user_id)
    .then((result) => {
      res.send({ message: 'New debt goal created', debt_goal: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Make a new debt payment towards one of the debt goals
router.post("/payment", (req, res) => {
  const [amount, debt_goal_id] = req.params;
  const user_id = 1;
  createDebtPayment(amount, debt_goal_id, user_id)
    .then((result) => {
      res.send({ message: 'Payments that have been made towards debt:', debt_payment: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


module.exports = router;


// issue: debt/payment -> how to get the debt_goal_id into the req params / insert value?
// issue: when debt is paid, how to switch from false to true?
