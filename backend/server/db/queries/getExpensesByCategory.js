const db = require('../connection.js');

// View total expenses for specified month by category
const getExpenseByCategory = (userId, month, year) => {
  return db.query(`
    SELECT user_id, categories.category AS category_name, SUM(amount) AS total_amount
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = $1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND users.id = $3
    GROUP BY categories.category, user_id;
    `,[month, year, userId])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getExpenseByCategory
};