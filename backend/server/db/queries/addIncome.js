const db = require('../connection.js');

// View total income for specified month
const addIncome = (user_id, income_date, amount) => {
  return db.query(`
    INSERT INTO income (user_id, income_date, amount) 
    VALUES ($1, $2, $3);
    `, [user_id, income_date, amount])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  addIncome
};