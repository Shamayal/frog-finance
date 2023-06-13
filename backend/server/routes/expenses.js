const router = require("express").Router();
const db = require('../db/connection.js');
const { addExpense } = require("../db/queries/addExpense.js");
const { getExpenseTransactions } = require("../db/queries/getExpenseTransactions.js");
const { getExpenseByCategory } = require("../db/queries/getExpensesByCategory.js");

// Total spent by category per month
  router.get("/:month/:year", (req, res) => {

    const userId = 1; // const userId = req.session.userId;
    const month = 05;   // const month = req.params.month;
    const year = 2023;   // const year = req.params.year;

  getExpenseByCategory(userId, month, year)
    .then((result) => {
      res.send({message: 'Total expenses by categories:', total_expenses_by_category: result.rows})
    })
    .catch((err) => {
      console.log(err.message);
    });

  })

  // Every expense transaction for a selected month
  router.get('/transactions', (req, res) => {
    const userId = 1; // const userId = req.session.userId;
    const month = 05;   // const month = req.params.month;
    const year = 2023;   // const year = req.params.year;

  getExpenseTransactions(userId, month, year)
    .then((result) => {
      res.send({message: 'All transactions for the selected month:', all_transactions_per_month: result.rows})
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
  })

  // need to connect with a budget id, right now it is null
  // the post req is for the budget tracker -> add expense route, users can add an expense they made
  router.post("/add", (req, res) => {

    const { user_id, expense_date, amount, sub_category_id } = req.body;

  addExpense(user_id, expense_date, amount, sub_category_id)
    .then((result) => {
      res.send({message: 'Expense added successfully:', expense_added: result.rows})
    })
    .catch((error) => {
      console.error('Error in adding expense', error);
    })
  })

  router.get("/netTotal/:month/:year", (req, res) => {
    const month = 05;
    const year = 2023;
    const user_id = 1;

    db.query(`SELECT total_income, total_expenses, total_income - total_expenses AS net_total
    FROM (SELECT SUM(amount) AS total_income
    FROM income
    WHERE EXTRACT(MONTH FROM income.income_date) = $1
    AND EXTRACT(YEAR FROM income.income_date) = $2
    AND income.user_id = $3) AS ti
    CROSS JOIN (SELECT SUM(amount) AS total_expenses
    FROM expenses
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = $1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND expenses.user_id = $3) AS te;`,[month, year, user_id])
    .then((result) => {
      res.send({message: 'The net total is: ', net_total: result.rows})
    })
    .catch((error) => {
      console.error('Error in calculating net total', error); 
    })
  })

// }

module.exports = router;