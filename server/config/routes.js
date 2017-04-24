var userController = require('../users/userController.js');
var helpers = require('./helpers.js') // custom middleware

// routes =======================================
module.exports = (app, express) => {
  // enter routing here
  app.post('/api/users/create', (req, res, next) => {
    console.log('Post request req.body = ', req.body)
    next();
  }, userController.addUser)
};
