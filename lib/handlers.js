'use strict';

var path = require('path');

var crash = function() {
  console.log('Going to crash as requested.');
  console.log('Any error messages below this line are expected.');

  process.exit(1);
};

var delay = function(req, res) {
  var delayTime = parseInt(req.params.delay);
  console.log('Rendering page after a delay of ' + delayTime + ' seconds.');

  setTimeout(function() {
    res.sendStatus(200);
  }, (delayTime * 1000));
};

var loop = function() {
  while (true) {}
};

var showGetParams = function(req, res) {
  res.json(req.query);
};

var statusCode = function(req, res) {
  res.sendFile(path.join(__dirname + '/status-code.html'));
};

var statusCodeWithStatus = function(req, res) {
  res.sendStatus(req.params.status);
};

module.exports = {
  crash: crash,
  delay: delay,
  loop: loop,
  showGetParams: showGetParams,
  statusCode: statusCode,
  statusCodeWithStatus: statusCodeWithStatus
};
