'use strict';

var path = require('path');
var express = require('express');
var app = express();
var handlers = require('./lib/handlers');

var configuration = {
  port: 2774, // = CRSH
  sendFileOpts: {
    root: __dirname + '/'
  }
};

// show instructions
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// crash server :-)
app.get('/crash', handlers.crash);

// loop, endlessly
app.get('/endless-loop', handlers.loop);

// show instructions for /status-code
app.get('/status-code', handlers.statusCode);

// respond with client-requested status code
app.get('/status-code/:status', handlers.statusCodeWithStatus);

// respond with client-requested delay
app.get('/delay/:delay', handlers.delay);

// hit the road!
app.listen(configuration.port, function() {
  console.log('Server started on port ' + configuration.port);
});
