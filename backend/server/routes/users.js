var express = require('express');
var router = express.Router();
const { addUser, verifyUser } = require('../db/queries/getUserQueries');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/logincheck', async (req, res) => {
  const authID = req.body.authID;
  const email = req.body.email;
  const nickname = req.body.nickname;

  console.log("Received login check request:", { authID, email, nickname });

  try {
    const user = await verifyUser(authID);
    console.log("User lookup result:", user.rows);

    if (user.rows.length > 0) {
      res.send({ message: 'User exists in database:', auth_id: user.rows[0].auth_id });
    } else {
      console.log("User does not exist, adding new user...");
      await addUser(nickname, email, authID);
      const newUser = await verifyUser(authID);
      console.log("New user added:", newUser.rows);
      res.send({ message: 'A new user was added:', auth_id: newUser.rows[0].auth_id });
    }
  } catch (error) {
    console.error("Error in login check:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
