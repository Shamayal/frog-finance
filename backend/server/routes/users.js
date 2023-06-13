var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/logincheck', function(req, res, next) {
  console.log("check req", req.body)

  const authID = req.body.id;

  // check if a user with this id exists
  // if exist: select * from user where auth_id = id
  // res.send

  // else
  // add auth_id to db
  // res.send

  res.send('respond with a resource');
});

module.exports = router;
