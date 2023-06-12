const router = require("express").Router();

// from react, send an HTTP POST request to server-side endpoint to add income using axios or fetch

module.exports = db => {

  router.get('/income', (request, response) => {

    const query = `SELECT * 
    FROM income
    WHERE user_id = $1
    AND income_date BETWEEN DATE_TRUNC('MONTH', $2::DATE) AND DATE_TRUNC('MONTH', $2::DATE) + INTERVAL '1 MONTH' - INTERVAL '1 DAY'`;

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

  // the post request is for the budget tracker -> add income - route, users can add an income they recieved
  router.post("/income", (request, response) => {

    const { user_id, income_date, amount } = request.body;
    
    const query = `INSERT INTO income (user_id, income_date, amount) VALUES ($1, $2, $3)`;
    const values = [user_id, income_date, amount]

    return db.query(query, values)
    .then((response) => {
      // response.json(response.rows)
      response.status(201).json({ message: 'Income added successfully' });
    })
    .catch((error) => {
      console.error('Error in adding income', error);
    })
  })
}