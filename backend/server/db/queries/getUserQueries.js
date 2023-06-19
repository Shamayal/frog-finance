const db = require('../connection.js');

const addUser = (nickname, email, auth_id) => {
  return db.query(
    `
    INSERT INTO users (nickname, email, auth_id)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [nickname, email, auth_id])
    .then((res) => {
      return res;
    })
}

const verifyUser = (auth_id) => {
  return db.query(`
    SELECT *
    FROM users
    WHERE users.auth_id = $1
    `, [auth_id])
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err.message);
  })

}
module.exports = {
  addUser,
  verifyUser
};