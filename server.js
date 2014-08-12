'use strict';

var express = require('express');
var http = require('http');
var search = require('node-modules');
var stream = search('paint');

var app = express();

app.get('/', function(req, res) {
    res.send("hello");
    stream.on('data', function(results){
      console.log(results);
    });
    stream.on('end', function(results){
      console.log("end");
    });
     
});

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('server running on port ' + app.get('port'));
});