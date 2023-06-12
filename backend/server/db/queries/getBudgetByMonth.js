const db = require('../connection.js');

// has to get category amount alloted and how much left in that category
// returns the budget for categories that month
//Equal month and year from updated_at
const getBudgetByMonth = (userId, month, year) => {
  return db
    .query(`


      SELECT budgets.id, categories.category, budgets.budget_amount, budgets.total_spent, budgets.budget_reached
      from budgets
      JOIN categories ON budgets.category_id = categories.id
      WHERE budgets.user_id = $1
      AND EXTRACT(MONTH FROM budgets.updated_at) = $2
      AND EXTRACT(YEAR FROM budgets.updated_at) = $3
      ORDER BY budgets.total_spent`,[userId, month, year])
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