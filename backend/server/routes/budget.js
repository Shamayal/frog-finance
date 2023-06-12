const express = require('express');
const router  = express.Router();
const { getBudgetByMonth } = require('../db/queries/getBudgetByMonth');

// GET/Budget/:month route to get the budget for that month
router.get('/:budgetDate', (req, res) => {   //passing month and year as seperate aruguments, send the date will fetch month and year from the date
  const budgetDate = req.params.budgetDate;
  //const userId = req.session.userId;
  const userId = 1;  //hardcoded the userId fro temporery purpose
  getBudgetByMonth(userId, budgetDate)             
    .then((budget) => {
      console.log(budget);
      const templateVars = {budget:budget, userId};
      //res.render('budget', templateVars);
      res.send(budget);  //temporory added to populate in the browser
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;