'use strict';

var path = require('path');
var express = require('express');
var app = express();

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
app.get('/crash', function() {
  process.exit(1);
});

// loop, endlessly
app.get('/endless-loop', function() {
  while (true) {}
});

// show instructions for /status-code
app.get('/status-code', function(req, res) {
  res.sendFile(path.join(__dirname + '/status-code.html'));
});

// respond with client-requested status code
app.get('/status-code/:status', function(req, res) {
  res.sendStatus(req.params.status);
});

// hit the road!
app.listen(configuration.port);
