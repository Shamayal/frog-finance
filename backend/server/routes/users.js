var express = require('express');
var router = express.Router();
const { addUser, verifyUser } = require('../db/queries/getUserQueries');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Pseudo code:
// check if a user with this id exists
// if exist: select * from user where auth_id = id
// res.send

// else
// add auth_id to db
// res.send
router.post('/logincheck', async (req, res) => {
  try {
    const authID = req.body.authID;
    const email = req.body.email;
    const nickname = req.body.nickname;

    // Check if the user with the provided Auth0 id exists
    const userExists = await verifyUser(authID);

    if (userExists) {
      res.send({ message: 'User exists in database', userID: authID });
    } else {
      // If the user doesn't exist, add them to the database
      const newUser = await addUser(nickname, email, authID);
      res.send({ message: 'A new user was added', user: newUser });
    }
  } catch (error) {
    console.error('Error while checking login:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

module.exports = router;
