const router = require("express").Router();
const db = require('../db/connection.js');
const { getIncomePayments, getIncomeByMonth, addIncome } = require('../db/queries/getIncomeQueries');

// View every income payment
router.get('/payments', (req, res) => {
  const userId = req.query.userId; // Extract userId from request query parameters
  const month = req.query.month;
  const year = req.query.year;

  if (!userId) {
    return res.status(400).send({ message: 'User ID is required' });
  }

  getIncomePayments(userId, month, year)
    .then((result) => {
      res.send({ message: 'Here is your income payments for this month:', monthly_income_payments: result.rows });
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
      res.status(500).send({ message: 'Error in fetching data' });
    });
});

// Monthly income total
router.get('/', (req, res) => {
  const userId = req.query.userId; // Extract userId from request query parameters
  const month = req.query.month;
  const year = req.query.year;

  if (!userId) {
    return res.status(400).send({ message: 'User ID is required' });
  }

  console.log('month = ', month, 'year =', year);

  getIncomeByMonth(userId, month, year)
    .then((result) => {
      res.send({ message: 'Here is your total income for the selected month:', monthly_income: result.rows });
    })
    .catch((error) => {
      console.error('Error in fetching data', error);
      res.status(500).send({ message: 'Error in fetching data' });
    });
});

// Add income - route, users can add an income they received
router.post("/add", (req, res) => {
  const { user_id, income_date, amount } = req.body;

  if (!user_id || !income_date || !amount) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  addIncome(user_id, income_date, amount)
    .then((result) => {
      res.send({ message: 'Income added successfully:', income_added: result.rows });
    })
    .catch((error) => {
      console.error('Error in adding income', error);
      res.status(500).send({ message: 'Error in adding income' });
    });
});

module.exports = router;
