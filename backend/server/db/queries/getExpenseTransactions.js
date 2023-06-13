const db = require('../connection.js');

// View all expense transactions for specified month
const getExpenseTransactions = (userId, month, year) => {
  return db.query(`
    SELECT user_id,
    to_char(expenses.expense_date, 'YYYY-MM-DD') AS expense_date,
    amount, budget_id, categories.category AS category_name, sub_categories.sub_category AS sub_category_name
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) =$1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND users.id = $3;
    `,[month, year, userId])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getExpenseTransactions
};