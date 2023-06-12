const db = require('../connection.js');

// returns the budget for that month
//extract month and year from budgetDate and updated_at
const getBudgetByMonth = (userId, budgetDate) => {
  return db
    .query(`
      select budgets.id, categories.category, budgets.budget_amount, budgets.total_spent, budgets.budget_reached 
      from budgets 
      JOIN categories ON budgets.category_id = categories.id  
      where budgets.user_id = $1 
      and EXTRACT(MONTH FROM budgets.updated_at) = EXTRACT(MONTH FROM TO_DATE($2,'YYYY-MM-DD'))  
      and EXTRACT(YEAR FROM budgets.updated_at) = EXTRACT(YEAR FROM TO_DATE($2,'YYYY-MM-DD'))
      ORDER BY budgets.total_spent`,[userId, budgetDate])
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