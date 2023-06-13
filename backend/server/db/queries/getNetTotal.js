const db = require('../connection.js');

// View net total saved for month
const getNetTotal = (userId, month, year) => {
  return db.query(`
    SELECT total_income, total_expenses, total_income - total_expenses AS net_total
    FROM (SELECT SUM(amount) AS total_income
    FROM income
    WHERE EXTRACT(MONTH FROM income.income_date) = $1
    AND EXTRACT(YEAR FROM income.income_date) = $2
    AND income.user_id = $3) AS ti
    CROSS JOIN (SELECT SUM(amount) AS total_expenses
    FROM expenses
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = $1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND expenses.user_id = $3) AS te;
    `,[month, year, userId])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getNetTotal
};