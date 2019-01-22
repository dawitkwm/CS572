const express = require('express');
const path = require('path');
const fs = require('fs')
// const cookieParser = require('cookie-parser');
const morganLogger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

const indexRouter = require('./routes/index');
const gradesRouter = require('./routes/grades');

const app = express();

// create a write stream (in append mode) for logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })

// allow CORS
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setup the morgan logger
app.use(morganLogger('dev')); //to standard output
app.use(morganLogger('combined', { stream: accessLogStream })) //to a log file

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/grades', gradesRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
  // res.render('error'); // render the error page
});

module.exports = app;
