module.exports = {
	put: function(client, payload) {
		console.log("Putting payload for " + client);
	},
	get: function(client) {
		console.log("Getting payload for" + client);
		return JSON.stringify({
			"payload": true
		});
	}
};
