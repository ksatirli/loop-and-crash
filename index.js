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

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/node_modules/wingcss/dist/wing.css'));
});

// crash server :-)
app.get('/crash', handlers.crash);

// loop, endlessly
app.get('/endless-loop', handlers.loop);

// show instructions for /show-get-params
app.get('/show-get-params', handlers.showGetParams);

// show instructions for /status-code
app.get('/status-code', handlers.statusCode);

// respond with client-requested status code
app.get('/status-code/:status', handlers.statusCodeWithStatus);

// respond with client-requested delay
app.get('/delay', handlers.delay);

// respond with client-requested delay
app.get('/delay/:delay', handlers.delayWithDelay);

// hit the road!
app.listen(configuration.port, function() {
  console.log('Server started on port ' + configuration.port);
});
