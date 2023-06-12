const express = require('express');
const router  = express.Router();
const { getBudgetByMonth } = require('../db/queries/getBudgetByMonth');

// GET/Budget/:month/:year route to get the budget for that month
router.get('/:month/:year', (req, res) => {   //passing month and year as seperate aruguments
  const month = req.params.month;
  const year = req.params.year;
 
  //const userId = req.session.userId;
  const userId = 1;                           //hardcoded the userId
  getBudgetByMonth(userId, month, year)             
    .then((budget) => {
      console.log(budget);
      //const templateVars = {budget:budget, userId};
      //res.render('budget', templateVars);
      res.send(budget);                      //temporory added to populate in the browser
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
