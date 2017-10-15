'use strict';

var path = require('path');

var indexHtml = function(req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + '/../index.html'));
};

var styleCss = function(req, res) {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname + '/../node_modules/wingcss/dist/wing.css'));
};

var crash = function(req, res) {

  // send 503 - Service Unavailable
  res.sendStatus(503);

  console.log('Going to crash as requested.');
  console.log('Any error messages below this line are expected.');

  setTimeout(function() {
    process.exit(1);
  }, (1000));
};

var loop = function() {
  while (true) {}
};

var showGetParams = function(req, res) {
  res.json(req.query);
};

var statusCode = function(req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + '/../status-code.html'));
};

var statusCodeWithStatus = function(req, res) {
  res.sendStatus(req.params.status);
};

var delay = function(req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + '/../delay.html'));
};

var delayWithDelay = function(req, res) {
  var delayTime = parseInt(req.params.delay);

  setTimeout(function() {
    res.sendStatus(200);
  }, (delayTime * 1000));
};

module.exports = {
  indexHtml: indexHtml,
  styleCss: styleCss,
  crash: crash,
  loop: loop,
  showGetParams: showGetParams,
  statusCode: statusCode,
  statusCodeWithStatus: statusCodeWithStatus,
  delay: delay,
  delayWithDelay: delayWithDelay
};
