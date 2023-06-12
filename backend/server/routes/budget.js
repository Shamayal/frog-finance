const express = require('express');
const router  = express.Router();
const { getBudgetByMonth } = require('../db/queries/getBudgetByMonth');

// GET/Budget/:month/:year route to get the budget for that month
// displaying on page but maybe not grouping properly? come back and check
router.get('/:month/:year', (req, res) => {   //passing month and year as seperate aruguments
  const month = req.params.month;
  const year = req.params.year;

  //const userId = req.session.userId;
  const userId = 1;                           //hardcoded the userId
  getBudgetByMonth(userId, month, year)
    .then((result) => {
      // res.send(result);
      res.send({message: 'Budget for the selected month:', budget_by_category: result.rows })
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
