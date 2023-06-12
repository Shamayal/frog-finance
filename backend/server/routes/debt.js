const router = require("express").Router();
const db = require('../db/connection.js');

// amount left = amount left * interest rate - debt payment
// Show the current debt goals
router.get("/", (req, res) => {
  db.query(`
    SELECT debt_goals.name, debt_goals.initial_amount, debt_goals.interest_rate,
      ROUND(((debt_goals.amount_left * debt_goals.interest_rate / 100) + debt_goals.amount_left), 2) -
      (SELECT SUM(debt_payments.amount)
      FROM debt_payments
      JOIN users ON users.id = debt_payments.user_id
      WHERE debt_payments.debt_goal_id = debt_goals.id
      AND users.id = debt_goals.user_id
      )
    AS amount_left,
      (SELECT SUM(debt_payments.amount)
      FROM debt_payments
      JOIN users ON users.id = debt_payments.user_id
      WHERE debt_payments.debt_goal_id = debt_goals.id
      AND users.id = debt_goals.user_id
      )
    AS amount_paid,
    debt_goals.paid_off
    FROM debt_goals
    JOIN users ON users.id = debt_goals.user_id
    WHERE debt_goals.paid_off = FALSE
    AND users.id = debt_goals.user_id;
  `)
  .then((result) => {
    res.send({ message: 'Here are the current debts to be paid:', current_debt: result.rows })
  })
  .catch((err) => {
    console.log(err.message);
  });
});


// Show the debts that have been fully paid off
router.get("/paidoff", (req, res) => {
  db.query(`
    SELECT name, initial_amount, amount_left, interest_rate, paid_off
    FROM debt_goals
    JOIN users ON users.id = debt_goals.user_id
    WHERE paid_off = TRUE
    AND users.id = debt_goals.user_id;
    `)
    .then((result) => {
      res.send({ message: 'View all your paidoff debts:', paid_off_debt: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Make a new debt goal
router.post("/new", (req, res) => {
  const [name, initial_amount, amount_left, interest_rate] = req.params;
  const user_id = 1;

  db.query(`
    INSERT INTO debt_goals (name, initial_amount, amount_left, interest_rate, paid_off, user_id)
    VALUES ('$1', $2, $3, $4, FALSE, $5)
    RETURNING * ;
    `, [name, initial_amount, amount_left, interest_rate, user_id])
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

  db.query(`
    INSERT INTO debt_payments (amount, debt_goal_id, user_id)
    VALUES ($1, $2, $3)
    RETURNING * ;
    `, [amount, debt_goal_id, user_id])
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
