var express = require('express');

var home = require('./home');
var users = require('./users');

var app = express();

app.use('/', home);
app.use('/users', users);

module.exports = app;
