const db = require('../connection.js');

// check multiple users
const getCurrentDebtGoals = (user_id) => {
  return db.query(`
  SELECT users.id AS user_id, debt_goals.id AS debt_id, debt_goals.name, debt_goals.initial_amount, debt_goals.interest_rate,
    ROUND(((debt_goals.amount_left * debt_goals.interest_rate / 100) + debt_goals.amount_left), 2) -
    (SELECT coalesce((SELECT SUM(debt_payments.amount)
    FROM debt_payments
    JOIN users ON users.id = debt_payments.user_id
    WHERE debt_payments.debt_goal_id = debt_goals.id
    AND users.id = debt_goals.user_id)
    , 0))
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
  AND users.id = $1;
  `, [user_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const getPaidOffDebts = (user_id) => {
  return db.query(`
  SELECT users.id AS user_id, debt_goals.id AS debt_id, name, initial_amount, amount_left, interest_rate, paid_off
  FROM debt_goals
  JOIN users ON users.id = debt_goals.user_id
  WHERE paid_off = TRUE
  AND users.id = $1;
  `, [user_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const createNewDebtGoal = (name, initial_amount, amount_left, interest_rate, user_id) => {
  return db.query(`
  INSERT INTO debt_goals (name, initial_amount, amount_left, interest_rate, paid_off, user_id)
  VALUES ($1, $2, $3, $4, FALSE, $5);
  RETURNING *;
  `, [name, initial_amount, amount_left, interest_rate, user_id])
}

const createDebtPayment = (amount, debt_goal_id, user_id) => {
  return db.query(`
  INSERT INTO debt_payments (amount, debt_goal_id, user_id)
  VALUES ($1, $2, $3)
  RETURNING * ;
  `, [amount, debt_goal_id, user_id])
}



module.exports = {
  getCurrentDebtGoals,
  getPaidOffDebts,
  createNewDebtGoal,
  createDebtPayment
};