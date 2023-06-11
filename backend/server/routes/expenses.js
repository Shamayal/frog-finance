const router = require("express").Router();

module.exports = db => {
  router.get("/expenses/:month", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 3001;
    const serverUrl = `${protocol}://${host}:${port}`;

    const { month, year, userId } = request.params;

    db.query(`SELECT * FROM expenses categories.name AS category_name, sub_categories.name 
    JOIN categories ON expenses.category_id = categories.id
    JOIN sub_categories ON expenses.sub_category_id = sub_categories.id
    WHERE MONTH(expense_date) = $1 AND YEAR(expense_date) = $2 AND user_id = $3`, 
    [month, year, userId])
    .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });  
  })
}





// this page displays the expenses for that month, split by categories and sub-categories
// query to get amount for each category, and display how much the user has spent so far


// separate pages for other sections of expenses like page to input amounts for each category
// page for form to add a new expense


// all expenses from all sub-categories
// all expenses from all categories 
// all expenses for each month 
// budget alloted for each category (currently)