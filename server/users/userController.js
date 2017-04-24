var Q = require('q');
var User = require('./userModel.js');

var createUser = Q.nbind(User.create, User)

module.exports = {

  addUser: (req, res, next) => {
    console.log(req.body);
    var username = req.body.username
    // enter data into database
  }

}
