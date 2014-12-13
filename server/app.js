var http = require('http');
var url = require('url');

var loggedUsers = {
	"a" : "A",
	"b" : "B"
};

http.createServer(function (req, res) {
	var url_parts = url.parse(req.url, true);
	var queryOb = url_parts.query;

	var u = queryOb['username'];
	var p = queryOb['password'];

	if(u && p) {
		if(loggedUsers[u] == p) {
			res.end("ok");

		}
		else {
			if(queryOb['add'] == 1) {
				loggedUsers[u] = p;
				res.end("reg");
			}
			else {
				res.end("chok");
			}
			
		}
	}
	else {
		res.end("chok");
	}
	
}).listen(8080, '127.0.0.1');

console.log('AAA Server running at http://127.0.0.1:1337/');