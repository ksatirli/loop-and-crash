'use strict'

var path = require('path')

var indexHtml = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname + '/../index.html'))
}

var styleCss = function (req, res) {
  res.set('Content-Type', 'text/css')
  res.sendFile(path.join(__dirname + '/../node_modules/wingcss/dist/wing.css'))
}

var crash = function (req, res) {
  // send 503 - Service Unavailable
  res.sendStatus(503)

  console.log('Going to crash as requested.')
  console.log('Any error messages below this line are expected.')

  setTimeout(function () {
    process.exit(1)
  }, (1000))
}

var loop = function () {
  while (true) {}
}

var showGetParams = function (req, res) {
  res.json(req.query)
}

var statusCode = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname + '/../status-code.html'))
}

var statusCodeWithStatus = function (req, res) {
  res.sendStatus(req.params.status)
}

var delay = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname + '/../delay.html'))
}

var delayWithDelay = function (req, res) {
  var delayTime = parseInt(req.params.delay)

  setTimeout(function () {
    res.sendStatus(200)
  }, (delayTime * 1000))
}

var information = function (req, res) {
  var dns = require('dns')
  var process = require('process')
  var os = require('os')

  var information = {
    directories: {
      cwd: process.cwd(),
      execPath: process.execPath,
      home: os.homedir(),
      tmp: os.tmpdir()
    },
    loadavg: os.loadavg(),
    memory: {
      _comment: 'value is in MB',
      free: Math.floor((os.freemem() / 1024) / 1024),
      total: Math.floor((os.totalmem() / 1024) / 1024)
    },
    network: {
      hostname: os.hostname(),
      dns: {
        servers: dns.getServers()
      }
    },
    process: {
      gid: process.getgid(),
      title: process.title,
      uid: process.getuid(),
      uptime: Math.floor(process.uptime())
    },
    os: {
      arch: os.arch(),
      platform: os.platform(),
      type: os.type(),
      uptime: Math.floor(os.uptime())
    }
  }

  if (req.query) {
    // add network information URL Query includes `?environment=1`
    if (req.query.environment === '1') {
      information.environment = process.env
    }

    // add network information URL Query includes `?interfaces=1`
    if (req.query.interfaces === '1') {
      information.network.interfaces = os.networkInterfaces()
    }
  }

  res.json(information)
}

module.exports = {
  indexHtml: indexHtml,
  styleCss: styleCss,
  crash: crash,
  loop: loop,
  showGetParams: showGetParams,
  statusCode: statusCode,
  statusCodeWithStatus: statusCodeWithStatus,
  delay: delay,
  delayWithDelay: delayWithDelay,
  information: information
}
