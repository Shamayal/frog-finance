const db = require('../connection.js');

// returns the budget for categories that month
//Equal month and year from updated_at
const getBudgetByMonth = (userId, month, year) => {
  return db
    .query(`
      select budgets.id, categories.category, budgets.budget_amount, budgets.total_spent, budgets.budget_reached 
      from budgets 
      JOIN categories ON budgets.category_id = categories.id  
      where budgets.user_id = $1 
      and EXTRACT(MONTH FROM budgets.updated_at) = $2  
      and EXTRACT(YEAR FROM budgets.updated_at) = $3
      ORDER BY budgets.total_spent`,[userId, month, year])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getBudgetByMonth
};