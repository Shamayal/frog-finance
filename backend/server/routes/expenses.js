const income = require("./income");
const router = require("express").Router();
const db = require('../db/connection.js');

// module.exports = db => {
//   // may not need this, already on budget.js
//     const protocol = req.protocol;
//     const host = req.hostname;
//     const port = process.env.PORT || 3001;
//     const serverUrl = `${protocol}://${host}:${port}`;

  router.get("/:month/:year", (req, res) => {

    const { month, year, userId } = req.params;

    // query to display monthly expenses for the month selected by the user, split by categories and sub-categories

    // sum of all expenses per category
    // for month, year, use

    db.query(`SELECT user_id, categories.category AS category_name,
    (SELECT SUM(amount)
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE users.id = expenses.user_id
    GROUP BY categories.id
    )
    AS total_category_expense
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = 05
    AND EXTRACT(YEAR FROM expenses.expense_date) = 2023
    AND users.id = expenses.user_id
    GROUP BY category_id;`,[month, year])
    .then((result) => {
      res.send({message: 'Total expenses by categories:', total_expenses_by_category: result.rows})
    })
      .catch((err) => {
        console.log(err.message);
      });

  })

  router.get('/transactions', (req, res) => {
    const month = 05;
    const year = 2023;

    // const values = [`${year}-${month}-01`];

    db.query(`SELECT user_id, expense_date, amount, budget_id, sub_categories.sub_category AS sub_category_name, categories.category AS category_name
    FROM expenses
    JOIN users ON users.id = expenses.user_id
    JOIN sub_categories ON sub_categories.id = expenses.sub_category_id
    JOIN categories ON categories.id = sub_categories.category_id
    WHERE EXTRACT(MONTH FROM expenses.expense_date) = $1
    AND EXTRACT(YEAR FROM expenses.expense_date) = $2
    AND users.id = expenses.user_id;`,[month, year])
    .then((result) => {
      res.send({message: 'All transactions:', all_transactions: result.rows})
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
  })

  // the post req is for the budget tracker -> add expense route, users can add an expense they made
  router.post("/add", (req, res) => {
    const { expense_date, amount, sub_category_id }  = req.body;
    const user_id = 1;

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

// }
// this is to be displayed on monthly expenses, and savings pages so user knows how much they saved
// const incomeTotal = `SELECT SUM(amount) AS total_income
// FROM income
// WHERE user_id = $1
// AND income_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

// const incomeTotalValues = [userId, `${year}-${month}-01`];

// const expenseTotal = `SELECT SUM(amount) AS total_expenses
// FROM expenses
// WHERE user_id = $1
// AND expense_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

// const expenseTotalValues = [userId, `${year}-${month}-01`];

// db.query(incomeTotal, incomeTotalValues)
// .then((results) => {
//   const totalIncome = results.rows[0].total_income;

//   db.query(expenseTotal, expenseTotalValues)
//   .then((results) => {
//     const totalExpenses = results.rows[0].total_expenses;
//     const netTotal = totalIncome - totalExpenses;

//     console.log(`The net total is ${totalIncome} - ${totalExpenses} = ${netTotal}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
// })
// .catch((error) => {
//   console.error(error);
// })

module.exports = router;