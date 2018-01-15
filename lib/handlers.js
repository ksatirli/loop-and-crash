'use strict'

const path = require('path')

const indexHtml = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, '/../index.html'))
}

const styleCss = function (req, res) {
  res.set('Content-Type', 'text/css')
  res.sendFile(path.join(__dirname, '/../node_modules/wingcss/dist/wing.css'))
}

const crash = function (req, res) {
  // send 503 - Service Unavailable
  res.sendStatus(503)

  console.log('Going to crash as requested.')
  console.log('Any error messages below this line are expected.')

  setTimeout(function () {
    process.exit(1)
  }, (1000))
}

const loop = function () {
  while (true) {}
}

const showGetParams = function (req, res) {
  res.json(req.query)
}

const statusCode = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, '/../status-code.html'))
}

const statusCodeWithStatus = function (req, res) {
  res.sendStatus(req.params.status)
}

const delay = function (req, res) {
  res.set('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, '/../delay.html'))
}

const delayWithDelay = function (req, res) {
  let delayTime = parseInt(req.params.delay)

  setTimeout(function () {
    res.sendStatus(200)
  }, (delayTime * 1000))
}

const information = function (req, res) {
  let dns = require('dns')
  let process = require('process')
  let os = require('os')

  let information = {
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
