const db = require('../connection.js');

// returns the budget for categories that month
//Equal month and year from updated_at
const getBudgetByMonth = (userId, month, year) => {
  return db
    .query(`
      SELECT budgets.id, categories.category, sum(budgets.budget_amount), sum(budgets.total_spent), budgets.budget_reached
      from budgets
      JOIN categories ON budgets.category_id = categories.id
      JOIN expenses on budgets.id = expenses.budget_id
      WHERE budgets.user_id = $1
      AND EXTRACT(MONTH FROM expenses.expense_date) = $2
      AND EXTRACT(YEAR FROM expenses.expense_date) = $3
      GROUP BY categories.category,budgets.user_id`,[userId, month, year])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getBudgetByMonth
};

// join expenses table, and use date
// totals are not returning dynamic values, currently just displaying hard coded total amounts
// currently not related to the expenses
// currently not summing the values of each category together, will just display each one individually