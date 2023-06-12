const income = require("./income");

const router = require("express").Router();

module.exports = db => {
  router.get("/expenses/:month", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 3001;
    const serverUrl = `${protocol}://${host}:${port}`;

    const { month, year, userId } = request.params;

    // query to display monthly expenses for the month selected by the user, split by categories and sub-categories
    
    db.query(`SELECT * expenses categories.name AS category_name, sub_categories.name
    FROM expenses
    JOIN categories ON expenses.category_id = categories.id
    JOIN sub_categories ON expenses.sub_category_id = sub_categories.id
    WHERE expenses.user_id = $1
    AND expense_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`,
    [userId, `${year}-${month}-01`])
    .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });  

  })

  router.get('/expenses', (request, response) => {
    const query = `SELECT * 
    FROM expenses
    WHERE user_id = $1
    AND expense_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

    const values = [user_id, `${year}-${month}-01`];

    db.query(query, values)
    .then((result) => {
      const rows = result.rows;
      response.status(200).json(rows);
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
  })

  // the post request is for the budget tracker -> add expense route, users can add an expense they made
  router.post("/expenses/add", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 3001;
    const serverUrl = `${protocol}://${host}:${port}`;

    const { user_id, expense_date, amount, sub_category_id }  = request.body;
    
    const query = `INSERT INTO expenses (user_id, expense_date, amount, sub_category_id) VALUES ($1, $2, $3, $4)`;
    const values = [user_id, expense_date, amount, sub_category_id]

    db.query(query, values)
    .then(() => {
      // response.json(response.rows)
      response.status(201).json({ message: 'Expense added successfully' });
    })
    .catch((error) => {
      console.error('Error in adding income', error);
    })
  })

}

const incomeTotal = `SELECT SUM(amount) AS total_income
FROM income
WHERE user_id = $1
AND income_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

const incomeTotalValues = [userId, `${year}-${month}-01`];

const expenseTotal = `SELECT SUM(amount) AS total_expenses
FROM expenses
WHERE user_id = $1
AND expense_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

const expenseTotalValues = [userId, `${year}-${month}-01`];

db.query(incomeTotal, incomeTotalValues)
.then((results) => {
  const totalIncome = results.rows[0].total_income;

  db.query(expenseTotal, expenseTotalValues)
  .then((results) => {
    const totalExpenses = results.rows[0].total_expenses;
    const netTotal = totalIncome - totalExpenses;

    console.log(`The net total is ${totalIncome} - ${totalExpenses} = ${netTotal}`);
  })
  .catch((error) => {
    console.error(error);
  })
})
.catch((error) => {
  console.error(error);
})