var CronJob = require('cron').CronJob;
var Users = require('../server/users/userModel');

exports.job = new CronJob({
	cronTime: '*/5 * * * * *',
	onTick: function() {
		console.log('tick...')
    User.queueMessages()
	},
	start: false,
})
