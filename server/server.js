// server.js

// modules ================================================
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();

//configuration ===========================================

// database files
var db = require('./data/db.js')

// configure our server with all the routing
require('./config/routes.js')(app, express);

// connect to mongo database named "JoeyBagODonuts"
mongoose.connect('mongodb://localhost/JoeyBagODonuts')

// set port
var port = process.env.PORT || 8080;

// start listening to requests on port
app.listen(port);

// export app for flexibility, required by index.js
module.exports = app;
