var express = require('express');
var router = express.Router();
const { addUser, verifyUser } = require('../db/queries/getUserQueries');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/logincheck', async (req, res) => {

  const authID = req.body.authID;
  const email = req.body.email;
  const nickname = req.body.nickname;

  // Check if the user exists
  verifyUser(authID)
    .then((result) => {
      // if user exists, display user information
      if (result.rows.length > 0) {
        return res.send({ message: 'User exists in database:', users: result.rows })
      } else {
        // If user doesn't exist, add to db
        addUser(nickname, email, authID)
        .then((result) => {
          return res.send({ message: 'A new user was added:', users: authID })
        })
        .catch((err) => {
          console.log(err.message);
        });
      }
  })
});

module.exports = router;
