const db = require('../connection.js');

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
  getIncomePayments
};