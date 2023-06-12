const router = require("express").Router();
const db = require('../db/connection.js');

// from react, send an HTTP POST req to server-side endpoint to add income using axios or fetch


// View every income payment
// done: displaying on page
router.get('/payments', (req, res) => {
  const month = 05;
  const year = 2023;

  db.query(`
    SELECT user_id, income_date, amount
      FROM income
      JOIN users ON users.id = income.user_id
      WHERE EXTRACT(MONTH FROM income.income_date) = $1
      AND EXTRACT(YEAR FROM income.income_date) = $2
      AND users.id = income.user_id
      `, [month, year])
    .then((result) => {
      res.send({ message: 'Here is your income payments for this month:', monthly_income_payments: result.rows })
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
})

router.get('/', (req, res) => {
  const month = 05;
  const year = 2023;

  db.query(`SELECT user_id,
  (SELECT SUM(amount)
  FROM income
  JOIN users ON users.id = income.user_id
  WHERE users.id = income.user_id
  AND EXTRACT(MONTH FROM income.income_date) = 05
  AND EXTRACT(YEAR FROM income.income_date) = 2023
  )
  AS total_monthly_income
  FROM income
  JOIN users ON users.id = income.user_id
  GROUP BY income.users.id`, [month, year])
    .then((result) => {
      res.send({ message: 'Here is your total income for the selected month:', monthly_income: result.rows })
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
})

// the post req is for the budget tracker -> add income - route, users can add an income they recieved
router.post("/add", (req, res) => {

  const { user_id, income_date, amount } = req.body;

  const query = `INSERT INTO income (user_id, income_date, amount) VALUES ($1, $2, $3)`;
  const values = [user_id, income_date, amount]

  return db.query(query, values)
    .then((res) => {
      res.send({ message: 'Income added successfully:', income_added: result.rows })
    })
    .catch((error) => {
      console.error('Error in adding income', error);
    })
})
// }

module.exports = router;