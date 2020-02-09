'use strict'

const path = require('path')
const express = require('express')
const app = express()
const handlers = require('./lib/handlers')

const configuration = {
  port: 2774, // = CRSH
  sendFileOpts: {
    root: path.join(__dirname, '/')
  }
}

// show instructions
app.get('/', handlers.indexHtml)

// serve CSS
app.get('/style.css', handlers.styleCss)

// crash server :-)
app.get('/crash', handlers.crash)

// loop, endlessly
app.get('/endless-loop', handlers.loop)

// show instructions for /show-get-params
app.get('/show-get-params', handlers.showGetParams)

// show instructions for /status-code
app.get('/status-code', handlers.statusCode)

// respond with client-requested status code
app.get('/status-code/:status', handlers.statusCodeWithStatus)

// show instructions for /delay
app.get('/delay', handlers.delay)

// respond with client-requested delay
app.get('/delay/:delay', handlers.delayWithDelay)

// show system information
app.get('/info', handlers.information)

// hit the road!
app.listen(configuration.port, function () {
  console.log('Server started on port ' + configuration.port)
})

// make app available for Chai (and others)
module.exports = app
