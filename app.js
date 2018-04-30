var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var animalRoutes = require('./routes/animal');
var userRoutes = require('./routes/user');
var app = express();
var mongoose = require('mongoose');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/animal', animalRoutes);
app.use('/user', userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.sendFile(__dirname + '/dist/index.html');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_db')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

module.exports = app;
