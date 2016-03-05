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
		var clientPath = path + '/' + client + '/';
		if (!fs.existsSync(clientPath)) {
			return false;
		}
		var files = fs.readdirSync(clientPath).sort();
		if (files.length === 0) {
			return false;
		}
		var contents = fs.readFileSync(clientPath + files[0]);
		fs.unlinkSync(clientPath + files[0]);
		return contents;
	}
};
