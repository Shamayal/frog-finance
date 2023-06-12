const router = require("express").Router();

module.exports = db => {
  const protocol = request.protocol;
  const host = request.hostname;
  const port = process.env.PORT || 8001;
  const serverUrl = `${protocol}://${host}:${port}`;


  // initial amount
  // amount left = amount left * interest rate - debt payment


  // Show the current debt goals
  router.get("/debt", (request, response) => {
    db.query(`
    SELECT name, initial_amount,
    (ROUND(((amount_left * interest_rate / 100) + amount_left), 2)  -
    (SELECT SUM(amount)
    FROM debt_payments
    JOIN users ON users.id = debt_payments.user_id
    JOIN debt_goals ON debt_payments.debt_goal_id = debt_goals.id
    WHERE debt_goals.id = debt_goal_id
    AND users.id = debt_goals.user_id))
    AS amount_left,
    interest_rate,
    paid_off
    FROM debt_goals
    JOIN users ON users.id = debt_goals.user_id
    WHERE paid_off = FALSE
    AND users.id = debt_goals.user_id;
    `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });


  // Show the debts that have been fully paid off
  router.get("/debt/paidoff", (request, response) => {
    db.query(`
    SELECT name, initial_amount, amount_left, interest_rate, paid_off
    FROM debt_goals
    JOIN users ON users.id = debt_goals.user_id
    WHERE paid_off = TRUE
    AND users.id = debt_goals.user_id;
    `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });


  router.post("/debt/new", (req, response) => {
    const [name, initial_amount, amount_left, interest_rate ]  = req.params;
    const user_id = 1;

    db.query(`
    INSERT INTO debt_goals (name, initial_amount, amount_left, interest_rate, paid_off, user_id)
    VALUES ('$1', $2, $3, $4, FALSE, $5);
    `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  router.post("/debt/payment", (request, response) => {
    const [amount, debt_goal_id ]  = req.params;
    const user_id = 1;

    db.query(`
    INSERT INTO debt_payments (amount, debt_goal_id, user_id)
    VALUES ($1, $2, $3);
    `)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

}



// issue: debt/payment -> how to get the debt_goal_id into the req params / insert value?

// to do: remove debt prefix

