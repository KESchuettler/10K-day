var mongoose = require('mongoose');


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
  }
})

UserSchema.pre('save', (next) => {
  // send verification text
  console.log('Pre-save this: ', this)
  return next()
  // clean datetime
})

module.exports = mongoose.model('users', UserSchema);
