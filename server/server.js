var express = require('express');
var cors = require('cors');

var app = express();

// app.use(express.static('public'));
app.use(express.static(__dirname + './../dist'));

app.use(cors());

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Now listening to port number:', port);
});
