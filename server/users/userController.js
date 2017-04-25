var Q = require('q');
var db = require('../config/config');
var User = require('../users/userModel');

module.exports = {

  addUser: (req, res, next) => {
    console.log(req.body);
    let mobileNumber = req.body.user.mobileNumber

    User.findOne({mobileNumber: mobileNumber}).exec((err, found) => {
      // check to see if mobile number has already been used.
      if(found) { res.status(200).send(found) }
      else {
        var newUser = new User({
          mobileNumber: mobileNumber,
          username: req.body.user.username,
          birthday: req.body.user.birthday,
          tenKday: req.body.user.tenKday,
        });
        newUser.save((err, newUser) => {
          if (err) res.status(500).send(err);
          else res.status(200).send(newUser)
        })
      }
    })
  }
}
