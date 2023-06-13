const express = require('express');
const router  = express.Router();
const db = require('../db/connection.js');

// GET/Budget/:month/:year route to get the budget for that month
// displaying on page but maybe not grouping properly? come back and check
router.get('/:month/:year', (req, res) => {   
  const month = req.params.month;
  const year = req.params.year;

  //const userId = req.session.userId;
  const userId = 1;       
  db.query(`
      SELECT categories.id, categories.category, sum(budgets.budget_amount) as budget_amount, sum(expenses.amount) as expense_amount, budgets.budget_reached
      from budgets
      JOIN categories ON budgets.category_id = categories.id
      JOIN expenses on budgets.id = expenses.budget_id
      WHERE budgets.user_id = $1
      AND EXTRACT(MONTH FROM expenses.expense_date) = $2
      AND EXTRACT(YEAR FROM expenses.expense_date) = $3
      GROUP BY categories.category,categories.id, budgets.budget_reached`,[userId, month, year])
    .then((result) => {
      res.send({message: 'Budget for the selected month:', budget_by_category: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });              
});

// Create a new budget
router.post("/add", (req, res) => {
  console.log(req.body);
  const { budget_amount, category_id, total_spent, updated_at, budget_reached } = req.body;
  const user_id = 1;

  const query = `INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at, budget_reached )
      VALUES ($1, $2, $3, $4, $5, $6)`;
  const values = [user_id, budget_amount, category_id, total_spent, updated_at,budget_reached ]

  return db.query(query, values)
    .then((result) => {
      res.send({ message: 'Budget added successfully:', budget_added: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


module.exports = router;
