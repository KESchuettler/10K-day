var CronJob = require('cron').CronJob;
var Users = require('../server/users/userModel');

exports.job = new CronJob({
	cronTime: '0 20 * * *',
	onTick: function() {
    User.queueMessages();
	},
	start: false,
});
