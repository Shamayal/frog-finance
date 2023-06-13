const db = require('../connection.js');

// Add income payment
const addIncome = (user_id, income_date, amount) => {
  return db.query(`
    INSERT INTO income (user_id, income_date, amount)
    VALUES ($1, $2, $3);
    `, [user_id, income_date, amount])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// View total income for specified month
const getIncomeByMonth = (userId, month, year) => {
  return db.query(`
    SELECT users.id AS user_id,
    (SELECT SUM(amount)
    FROM income
    WHERE users.id = income.user_id
    AND EXTRACT(MONTH FROM income.income_date) = $1
    AND EXTRACT(YEAR FROM income.income_date) = $2)
    AS total_monthly_income
    FROM income
    JOIN users ON users.id = income.user_id
    WHERE users.id = $3
    GROUP BY users.id;
    `, [month, year, userId])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};



// View every income payment for specified month
const getIncomePayments = (userId, month, year) => {
  return db.query(`
    SELECT user_id,
    to_char(income.income_date, 'YYYY-MM-DD') AS income_date,
    amount
    FROM income
    JOIN users ON users.id = income.user_id
    WHERE EXTRACT(MONTH FROM income.income_date) = $1
    AND EXTRACT(YEAR FROM income.income_date) = $2
    AND users.id = $3;`, [month, year, userId])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  addIncome,
  getIncomeByMonth,
  getIncomePayments
};