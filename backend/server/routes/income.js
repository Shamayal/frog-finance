const router = require("express").Router();
const db = require('../db/connection.js');
const { getIncomePayments, getIncomeByMonth, addIncome } = require('../db/queries/getIncomeQueries');

// from react, send an HTTP POST req to server-side endpoint to add income using axios or fetch

// View every income payment
router.get('/payments', (req, res) => {
  const userId = 1; // const userId = req.session.userId;
  const month = 05;   // const month = req.params.month;
  const year = 2023;   // const year = req.params.year;

  getIncomePayments(userId, month, year)
    .then((result) => {
      res.send({ message: 'Here is your income payments for this month:', monthly_income_payments: result.rows })
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
    })
})

// Monthly income total
router.get('/', (req, res) => {
  const userId = 1; // const userId = req.session.userId;
  const month = 05;   // const month = req.params.month;
  const year = 2023;   // const year = req.params.year;

  getIncomeByMonth(userId, month, year)
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

  addIncome(user_id, income_date, amount)
    .then((res) => {
      res.send({ message: 'Income added successfully:', income_added: result.rows })
    })
    .catch((error) => {
      console.error('Error in adding income', error);
    })
})

module.exports = router;