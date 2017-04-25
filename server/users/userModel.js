var mongoose = require('mongoose');
const helpers = require('../config/helpers')
const moment = require('moment')


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
        // compare today to tenKday
        return moment().add(7, 'days').isSame(user.tenKday, 'day') 
      })
      if(users.length > 0) {
        helpers.sendSevenDayNotifications(users)
      }
    })
}

UserSchema.post('save', (doc) => {
  // send verification text
  helpers.sendInitialNotification(doc)
})

module.exports = mongoose.model('users', UserSchema);
