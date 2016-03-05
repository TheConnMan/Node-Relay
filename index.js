var express = require('express');

var app = express();

app.get('/api/v1/:fn', function(req, res) {
	try {
		var result = {
			"ok": true
		};
		if (req.query.apiKey !== process.env.API_KEY) {
			throw "Invalid API key";
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
