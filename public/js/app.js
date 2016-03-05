var functions = [{
	fn: 'Put',
	endpoint: '/api/put',
	params: [{
		key: 'apiKey',
		name: 'API Key',
		default: 'changeme'
	}, {
		key: 'clientId',
		name: 'Device Name',
		default: 'test'
	}, {
		key: 'payload',
		name: 'Message Payload',
		default: '{"test": ok}'
	}]
}, {
	fn: 'Get',
	endpoint: '/api/get',
	params: [{
		key: 'apiKey',
		name: 'API Key',
		default: 'changeme'
	}, {
		key: 'clientId',
		name: 'Device Name',
		default: 'test'
	}]
}];

function renderFunctions(selector) {
	$.get('/templates/function.mu', function(template) {
		Mustache.parse(template);
		$(selector).html(functions.map(function(fn) {
			return Mustache.render(template, fn);
		}).join(''));
	});
}
