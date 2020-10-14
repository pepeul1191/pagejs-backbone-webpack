const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
// custom configs and middlewares
// load .env
require('dotenv').config();
// app
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// forward functions
var home = function(req, res, next) {
  res.render('home', { 
    title: 'Home', 
  });
};
var admin = function(req, res, next) {
  res.render('admin', { 
    title: 'Admin', 
  });
};
// routes
app.get('/', home);
app.get('/about', home);
app.get('/contact', home);
app.get('/contact/:name', home);
app.get('/admin', admin);
app.get('/admin/teacher', admin);
app.get('/admin/student', admin);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var response = '404: Recurso no encontrado';
  res.status(404).send(response);
});
// export app
module.exports = app;
