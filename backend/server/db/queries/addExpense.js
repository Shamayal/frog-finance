const db = require('../connection.js');

// Add expense transaction
const addExpense = (user_id, expense_date, amount, sub_category_id) => {
  return db.query(`
    INSERT INTO expenses (user_id, expense_date, amount, sub_category_id)
    VALUES ($1, $2, $3, $4);
    `, [user_id, expense_date, amount, sub_category_id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  addExpense
};