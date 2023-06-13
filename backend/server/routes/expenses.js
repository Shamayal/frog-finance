const income = require("./income");
const router = require("express").Router();
const db = require('../db/connection.js');

// Total spent by category per month
  router.get("/:month/:year", (req, res) => {

    // const { month, year, userId } = req.params;

    const month = 05;
    const year = 2023;

    // query to display monthly expenses for the month selected by the user, split by categories and sub-categories

    // sum of all expenses per category

    db.query(`SELECT user_id, categories.category AS category_name, SUM(amount) AS total_amount
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = $1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND users.id = expenses.user_id
    GROUP BY categories.category, user_id;`,[month, year])
    .then((result) => {
      res.send({message: 'Total expenses by categories:', total_expenses_by_category: result.rows})
    })
    .catch((err) => {
      console.log(err.message);
    });

  })

  // Every expense transaction for a selected month
  router.get('/transactions', (req, res) => {
    const month = 05;
    const year = 2023;

    db.query(`SELECT user_id,
    to_char(expenses.expense_date, 'YYYY-MM-DD') AS expense_date,
    amount, budget_id, categories.category AS category_name, sub_categories.sub_category AS sub_category_name
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) =$1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND users.id = expenses.user_id;`,[month, year])
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

    const query = `INSERT INTO expenses (user_id, expense_date, amount, sub_category_id) VALUES ($1, $2, $3, $4)`;
    const values = [user_id, expense_date, amount, sub_category_id]

    db.query(query, values)
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


// db.query(`SELECT SUM(income.amount) AS total_income, SUM(expenses.amount) AS total_expenses, SUM(income.amount) - SUM(expenses.amount) AS net_total
// FROM income
// JOIN expenses ON expenses.user_id = income.user_id
// WHERE EXTRACT(MONTH FROM income.income_date) = $1
// AND EXTRACT(YEAR FROM income.income_date) = $2
// AND income.user_id = $3;`,[month, year, user_id])