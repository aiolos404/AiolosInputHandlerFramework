/*--------------------------------------------------------
1. Jialiang Chang / May 26, 2015:

2. Version log :1.written by May 26,2015

3. Precise examples / instructions to run this program:

in the folder of inputApplication
> npm install (This command is ONLY for first time user) 
> node bin/www (or supervisor bin/www)
> type localhost:3000 in broswer to test running

4. Aim: to help insert the business data into database

5. Notes:
  a.run mongodb before run this application
  c.This is the "main" execution file of application
  d.The file of running interface is bin/www
----------------------------------------------------------*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/111testdatabases");//We can change the location or address of mongodb database here. Current name of database is "testdatabases", the name should always be plural form.

var index = require('./routes/index');
var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);




module.exports = app;
