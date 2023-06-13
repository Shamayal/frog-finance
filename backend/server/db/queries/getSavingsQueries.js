const db = require('../connection.js');

const getCurrentSavingsGoal = (user_id) => {
  return db.query(`
  SELECT users.id AS user_id, savings.id AS savings_id, savings.saving_name, savings.goal_amount,
    (SELECT SUM(amount) FROM income WHERE user_id = savings.user_id) -
    ((SELECT SUM(amount) FROM debt_payments WHERE user_id = savings.user_id) +
    (SELECT SUM(amount) FROM expenses WHERE user_id = savings.user_id))
  AS current_amount,
  to_char(date_created, 'YYYY-MM-DD') AS date_created,
  finished
  FROM savings
  JOIN users ON users.id = savings.user_id
  WHERE finished = FALSE
  AND users.id = $1;
  `, [user_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const getFinishedSavingsGoal = (user_id) => {
  return db.query(`
  SELECT users.id AS user_id, savings.id AS savings_id, savings.saving_name, savings.goal_amount, savings.current_amount, to_char(savings.date_created, 'YYYY-MM-DD') AS date_created,
  to_char(savings.date_created, 'YYYY-MM-DD') AS date_finished, finished
  FROM savings
  JOIN users ON users.id = savings.user_id
  WHERE finished = TRUE
  AND users.id = $1;
  `, [user_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const createNewSavingsGoal = (savings_name, goal_amount, current_amount, user_id) => {
  return db.query(`
  INSERT INTO savings (saving_name, goal_amount, current_amount, finished, date_created, date_finished, user_id)
  VALUES ('$1', $2, $3, FALSE, CURRENT_DATE, NULL, $4
  RETURNING *;
  `,
    [savings_name, goal_amount, current_amount, user_id]
  )
}

module.exports = {
  getCurrentSavingsGoal,
  getFinishedSavingsGoal,
  createNewSavingsGoal
}