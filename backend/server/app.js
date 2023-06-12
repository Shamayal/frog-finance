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
var savingsRouter = require('./routes/savings'); // route to savings.js
var debtRouter = require('./routes/debt'); // route to debt.js
var incomeRouter = require('./routes/income'); // route to income.js
var expensesRouter = require('./routes/expenses'); // route to expenses.js

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
app.use('/savings', savingsRouter); // savings route
app.use('/debt', debtRouter); // debt route
app.use('/income', incomeRouter); // income route
app.use('/expenses', expensesRouter); // expenses route


module.exports = app;
