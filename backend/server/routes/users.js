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
router.post('/logincheck', function (req, res) {
  console.log("check incoming user req", req.body)

  const authID = req.body.id;
  const email = req.body.email;
  const nickname = req.body.nickname;
  // if result.rows.length > 0 then user is verified if not the user is not found

  // Ask alvin: how to verify with this function

  // If true, return that user id
  // verifyUser(authID)
  //   .then((res) => {
  //     if (res.rows.length > 0) {
  //       res.send({ message: 'User exists in database:', })
  //     } else {
  //       addUser(authID)
  //         .then((result) => {
  //           res.send({ message: 'A new user was added:', auth_id: result.rows[0] })
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //     }
  // })


  // if false, add user .. and return the id? or just add user?
  addUser(nickname, email, authID)
    .then((result) => {
      res.send({ message: 'A new user was added:', user: result.rows })
    })
    .catch((err) => {
      console.log(err.message);
    });

});

module.exports = router;
