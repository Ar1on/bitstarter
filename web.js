var express = require('express');

var app = express.createServer(express.logger());
fs = require('fs');
app.get('/', function(request, response) {

	fs.readFile('index.html', 'utf8', function (err,data) {
 	 if (err) {
   	 return console.log(err);
 	}
	  console.log('index request');
	response.send(data);
	});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
