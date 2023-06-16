const express = require('express');
const router  = express.Router();
const { getBudgetByCategory, createNewBudget, updateBudgetAmount, updateBudgetReached } = require("../db/queries/getBudgets");

// GET/budget/:month/:year -  route to get the budget for that month
router.get('/:month/:year', (req, res) => {   
  const month = req.params.month;
  const year = req.params.year;
  const userId = 1; 
       
  getBudgetByCategory(userId, month, year)
      .then((result) => {
      res.send({message: 'Budget for the selected month:', budget_by_category: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });              
});

// POST/budget/add - Create a new budget
router.post("/add", (req, res) => {
  const { user_id, budget_amount, category_id, total_spent, updated_at, budget_reached } = req.body;

  createNewBudget(user_id, budget_amount, category_id, total_spent, updated_at, budget_reached)
    .then((result) => {
      res.send({ message: 'Budget added successfully:', budget_added: result.rowCount })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//POST/budget/updateAmount - Update the budget Amount for the Category
router.post("/updateAmount", (req, res) => {
  const { budget_amount, category_id, updated_at } = req.body;
  const user_id = 1;

  updateBudgetAmount(user_id, budget_amount, category_id, updated_at )
    .then((result) => {
      res.send({ message: 'Budget Updated successfully:', budget_amount_updated: result.rowCount })
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//POST/budget/budgetReached/:budget_id - Update the budget Reached flag
router.post("/budgetReached", (req, res) => {
  const { budget_id } = req.body;

  updateBudgetReached(budget_id)
    .then((result) => {
      res.send({ message: ' Updated Budget Reached successfully:', budget_reached_updated: result.rowCount })
    })
    .catch((err) => {
      console.log(err.message);
    });
});


module.exports = router;
