var express = require('express');

var app = express();

var path = require('path');

app.use(express.static('public'));

app.use('/images',express.static(__dirname + '/images'));

// viewed at http://localhost:8080

app.get('/', function(req, res) {

   res.sendFile(path.join(__dirname + '/index.html'));

});





{/* <button onclick="myFunction()">Click Me!</button> */}


app.listen(8080);