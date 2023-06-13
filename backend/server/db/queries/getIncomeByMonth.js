const db = require('../connection.js');

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

module.exports = {
  getIncomeByMonth
};