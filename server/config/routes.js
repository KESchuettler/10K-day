var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // custom middleware

// routes =======================================
module.exports = (app, express) => {
  // enter routing here
  app.get('/', (res, resp, next) => {
    res.render('index');
  });

  app.post('/api/users/create', userController.addUser);
};
