const db = require('../connection.js');

// Add expense transaction
const addExpense = (user_id, expense_date, amount, category_id, sub_category_id) => {
  return db.query(`
    INSERT INTO expenses (user_id, expense_date, amount, category_id, sub_category_id)
    VALUES ($1, $2, $3, $4, $5);
    `, [user_id, expense_date, amount, category_id, sub_category_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

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
  addExpense,
  getExpenseByCategory,
  getExpenseTransactions
};