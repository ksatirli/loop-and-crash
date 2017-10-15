'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should(); // jshint unused:false

chai.use(chaiHttp);

describe('Routes', () => {

  describe('GET /', () => {
    it('should be HTML', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.be.html;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /style.css', () => {
    it('should be CSS', (done) => {
      chai.request(server)
        .get('/style.css')
        .end((err, res) => {
          res.should.have.header('content-type', 'text/css; charset=utf-8');
          res.should.have.status(200);
          done();
        });
    });
  });

  // describe('GET /crash', () => {
  //   it('should respond with HTTP Status Code 503', (done) => {
  //     chai.request(server)
  //       .get('/crash')
  //       .end((err, res) => {
  //         res.should.be.text.header('content-type', 'text/plain; charset=utf-8');
  //         res.should.have.status(503);
  //         done();
  //       });
  //   });
  // });

  // TODO: test /endless-loop

  describe('GET /show-get-params', () => {
    it('should have URL Query parameters', (done) => {
      chai.request(server)
        .get('/show-get-params?foo=bar')
        .end((err, res) => {
          res.should.have.header('content-type', 'application/json; charset=utf-8');
          res.should.have.status(200);
          // TODO: check for body
          done();
        });
    });
  });

  describe('GET /status-code', () => {
    it('should be HTML', (done) => {
      chai.request(server)
        .get('/status-code')
        .end((err, res) => {
          res.should.be.html;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /status-code/200', () => {
    it('should respond with HTTP Status Code 200', (done) => {
      chai.request(server)
        .get('/status-code/200')
        .end((err, res) => {
          res.should.have.header('content-type', 'text/plain; charset=utf-8');
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /delay', () => {
    it('should be HTML', (done) => {
      chai.request(server)
        .get('/delay')
        .end((err, res) => {
          res.should.be.html;
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /delay/1', () => {
    it('should be HTML', (done) => {
      chai.request(server)
        .get('/delay/1')
        .end((err, res) => {
          res.should.have.header('content-type', 'text/plain; charset=utf-8');
          res.should.have.status(200);
          done();
        });
    });
  });

});
