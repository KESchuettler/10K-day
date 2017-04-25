const twilio = require('twilio');
const User = require('../users/userModel')

module.exports = {
  sendNotifications : (users) => {

    const client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

    // Create options to send message
    users.forEach((user) => {
      console.log('sendNotifications user: ', user)
      let options = {
        to: "1" + user.mobileNumber,
        from : process.env.TWILIO_PHONE_NUMBER,
        body: "Hey " + user.username + '! Just a reminder that your 10,000th day is ' + user.tenKday.toDateString() + '. You\'re number will now be deleted from our system.'
      };

      // Send message
      client.sendMessage(options, (err, res) => {
        if(err) console.err(err)
        else {
          let name = user.name
          console.log('Reminder sent to ' + user.name + '.')
          User.find(user).remove((err, res) => {
            if (err) console.log(err)
            else {
              console.log(name + ' removed from db.')
            }
          })
        }
      })
    })
  }
}
