var fs = require('fs');

var path = process.env.DATA_PATH || './relay';

module.exports = {
	put: function(client, payload) {
		var clientPath = path + '/' + client + '/';
		if (!fs.existsSync(clientPath)) {
			fs.mkdirSync(clientPath);
		}
		fs.writeFileSync(clientPath + new Date().getTime(), payload);
	},
	get: function(client) {
		console.log("Getting payload for" + client);
		return JSON.stringify({
			"payload": true
		});
	}
};
