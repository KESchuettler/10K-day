// server.js

// modules ================================================
var express = require('express');
var mongoose = require('mongoose')

var app = express();

//configuration ===========================================

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


// connect to mongo database named "JoeyBagODonuts"

// set port
var port = process.env.PORT || 8080;

// start listening to requests on port
app.listen(port);

// export app for flexibility, required by index.js
module.exports = app
