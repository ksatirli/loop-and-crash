'use strict';

var crash = function() {
  console.log('Going to crash as requested.');
  console.log('Any error messages below this line are expected.');

  process.exit(1);
};

var loop = function() {
  while (true) {}
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
  statusCode: statusCode,
  statusCodeWithStatus: statusCodeWithStatus
};
