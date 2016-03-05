var express = require('express');
var storage = require('./services/storage');

var app = express();

app.use(express.static('public'));

app.get('/api/:fn', function(req, res) {
	try {
		var result = {
			"ok": true
		};
		if (req.query.apiKey !== process.env.API_KEY) {
			throw "Invalid API key";
		}
		if (!req.query.clientId || req.query.clientId.length === 0) {
			throw "A client ID is required";
		}
		if (req.params.fn == "put") {
			if (!req.query.payload || req.query.payload.length === 0) {
				throw "A payload is required";
			}
			try {
				JSON.parse(req.query.payload);
			} catch (e) {
				throw "Payload is not JSON";
			}
			result.success = true;
			storage.put(req.query.clientId, req.query.payload);
		}
		if (req.params.fn == "get") {
			result.success = true;
			var payload = storage.get(req.query.clientId);
			if (payload) {
				result.success = true;
				result.message = JSON.parse(payload);
			} else {
				result.success = false;
			}
		}
		res.json(result);
	} catch (e) {
		console.log(e);
		res.json({
			"ok": false,
			"error": e
		});
	}
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
