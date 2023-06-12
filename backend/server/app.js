// load .env data into process.env
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');   //to avoid cors issue (as per Vasiley)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var budgetRouter = require('./routes/budget');  //route to budget.js

var app = express();

app.use(cors());    //to avoid cors issue (as per Vasiley)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/budget', budgetRouter);  //budget route

module.exports = app;
