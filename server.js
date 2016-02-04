var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

// app.use('/', function(req, res, next){
//   next();
// });

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});


// var connect = require('connect'),
//     serveStatic = require('serve-static');

// var app = connect();

// app.use(serveStatic("../angularjs"));
// app.listen(5000);