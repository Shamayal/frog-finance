const db = require('../connection.js');

//Query to Fetch Budget amount and sum of expenses for the Category
const getBudgetByCategory = (userId, month, year) => {
  return  db.query(`
  SELECT 
  categories.id, 
  categories.category, 
  b.budget_amount as budget_amount, 
  COALESCE(sum(expenses.amount),0) as expense_amount, 
  budget_reached
  FROM budgets b
  JOIN categories ON b.category_id = categories.id
  LEFT JOIN expenses on b.category_id = expenses.category_id and EXTRACT(MONTH FROM expenses.expense_date) = $2
  AND EXTRACT(YEAR FROM expenses.expense_date) = $3
  WHERE b.user_id = $1
  AND EXTRACT(MONTH FROM b.updated_at) = $2
  AND EXTRACT(YEAR FROM b.updated_at) = $3
  GROUP BY categories.category,categories.id, b.budget_reached, b.budget_amount
  ORDER BY b.budget_amount desc`,[userId, month, year])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

//Create a new Budget for the user
const createNewBudget = (user_id, budget_amount, category_id, total_spent, updated_at, budget_reached) => {
  return db.query(`INSERT INTO budgets (user_id, budget_amount, category_id, total_spent, updated_at, budget_reached )
                  VALUES ($1, $2, $3, $4, $5, $6)`,
                  [user_id, budget_amount, category_id, total_spent, updated_at, budget_reached])
                  .then((result) => {
                    return result;
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
}

//Update the Budget Amount
const updateBudgetAmount = (user_id, budget_amount, category_id, updated_at) => {
  return db.query(`UPDATE budgets set budget_amount = $1, updated_at = $2 
                  where category_id = $3 and user_id = $4`,
                  [budget_amount, updated_at, category_id, user_id])
                  .then((result) => {
                    return result;
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
}

//Update the Budget Amount Reached
const updateBudgetReached = (budget_id) => {
  return db.query(`UPDATE budgets set budget_reached = TRUE where id = $1`, [budget_id])
                  .then((result) => {
                    return result;
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
}

//Get the Categories that don't have budget for that month
const getCategoryNotBudgeted = (userId, month, year) => {
  return db.query(`
        select distinct categories.id, categories.category from categories 
        where categories.id NOT IN (select category_id from budgets where user_id = $1
        AND EXTRACT(MONTH FROM budgets.updated_at) = $2
        AND EXTRACT(YEAR FROM budgets.updated_at) = $3) order by categories.id`,[userId, month, year])
                  .then((result) => {
                    return result;
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
}

module.exports = {
  getBudgetByCategory,
  createNewBudget,
  updateBudgetAmount,
  updateBudgetReached,
  getCategoryNotBudgeted
};