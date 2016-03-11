# Loop 'n Crash

_Loop 'n Crash_ is a [Express](http://expressjs.com/)-based server that provides _endless loops_ and _crashes_ as a service. As a bonus feature, you can output client-requested status codes to.

_Loop 'n Crash_ is geared towards creating proof-of-concepts and similar experiments where applications need to crash, loop endlessly or repetitively output a specific status code.

## Usage

Setting up and using `loop-and-crash` is simple and only requires a few steps:

Start by cloning this [repository](https://bitbucket.org/frostedio/loop-and-crash), then change into the application's directory (usually named  `loop-and-crash`) and install any dependencies using the `npm install` command.

Next, start the application by running `npm start` (or: `node index.js`) and open [localhost:2774](http://localhost:2774/) in your browser.

Chose wether to invoke an endless loop, a crash or have the server respond with a specific status code.

### Demo

The following animation shows how the application looks like, in action:

![Demo of the application in Gif format](http://frostedio-static.s3.amazonaws.com/loop-and-crash/demo-scale-50.gif)

### Maintainers

This application is currently maintained by the individuals listed below.

* [Kerim Satirli](mailto:kerim@icemobile.com)

# License

`loop-and-crash` is licensed under the _Apache 2.0_ license. A full copy of the license can be found on the [apache.org](http://www.apache.org/licenses/LICENSE-2.0) site.

In short, this license permits you to use this product commercially, distribute this software and make modifications.

The software is provided without warranty and any contributors cannot be held liable for damages. You are also not allowed to use any name, logo or trademark without prior consent.
