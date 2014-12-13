var http = require("http");
var fs = require('fs');
var url = require("url");

var users = {};

http.createServer(demoRouter).listen(8888);

function demoRouter(request, response) {

	var parsedUrl = url.parse(request.url);
	console.log(parsedUrl.pathname);
	switch(parsedUrl.pathname) {
		case "/" :
			
			renderHtml(request, response);
			break;
		case "/login" : 
			login(request, response);
			break;
	}

	
}

function renderHtml(req, res) {
	fs.readFile('./html/index.res', function (err, data) {
	  	if (err) { 
	  		console.log("File read error");
		}
	  	res.write(data);
	  	res.end();
	});
}

function login(req, res) {
	console.log("login");
	res.end();
}

