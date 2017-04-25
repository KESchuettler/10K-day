var mongoose = require('mongoose');
let helpers = require('../config/helpers')


var UserSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
  },

  birthday: {
    type: Date,
    required: true
  },

  tenKday: {
    type: Date,
    required: true
  }
})

UserSchema.statics.queueMessages = () => {
  var today = new Date()
  User
    .find()
    .exec((users) => {
      users = users.filter((user) => {
        return user.tenKday === today
      })
      if(users.length > 0) {
        helpers.sendNotifications(users)
      }
    })
}

UserSchema.post('save', (doc) => {
  // send verification text
  helpers.sendNotifications([doc])
})

module.exports = mongoose.model('users', UserSchema);
