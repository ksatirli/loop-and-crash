'use strict'

// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const should = chai.should() // jshint unused:false

chai.use(chaiHttp)

describe('Routes', () => {
  describe('/', () => {
    it('GET / should be HTML', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.be.html
        res.should.have.status(200)

        done()
      })
    })
  })

  describe('/style.css', () => {
    it('GET /style.css should be CSS', (done) => {
      chai.request(server)
      .get('/style.css')
      .end((err, res) => {
        res.should.have.header('content-type', 'text/css; charset=utf-8')
        res.should.have.status(200)

        done()
      })
    })
  })

  // describe('GET /crash', () => {
  //   it('should respond with HTTP Status Code 503', (done) => {
  //     chai.request(server)
  //     .get('/crash')
  //     .end((err, res) => {
  //       res.should.be.text.header('content-type', 'text/plain; charset=utf-8');
  //       res.should.have.status(503);
  //
  //       done();
  //     });
  //   });
  // });

  // TODO: test /endless-loop

  describe('/show-get-params', () => {
    it('GET /show-get-params should have URL Query parameters', (done) => {
      chai.request(server)
      .get('/show-get-params')
      .query({foo: 'bar'})
      .end((err, res) => {
        res.should.have.header('content-type', 'application/json; charset=utf-8')
        res.should.have.status(200)
        res.req.res.body.foo.should.exist

        done()
      })
    })
  })

  describe('/status-code', () => {
    it('GET /status-code should be HTML', (done) => {
      chai.request(server)
      .get('/status-code')
      .end((err, res) => {
        res.should.be.html
        res.should.have.status(200)

        done()
      })
    })

    it('GET /status-code/200 should respond with HTTP Status Code 200', (done) => {
      chai.request(server)
      .get('/status-code/200')
      .end((err, res) => {
        res.should.have.header('content-type', 'text/plain; charset=utf-8')
        res.should.have.status(200)

        done()
      })
    })
  })

  describe('/delay', () => {
    it('GET /delay should be HTML', (done) => {
      chai.request(server)
      .get('/delay')
      .end((err, res) => {
        res.should.be.html
        res.should.have.status(200)

        done()
      })
    })

    it('GET /delay/1 should be plain-text', (done) => {
      chai.request(server)
      .get('/delay/1')
      .end((err, res) => {
        res.should.have.header('content-type', 'text/plain; charset=utf-8')
        res.should.have.status(200)

        done()
      })
    })
  })

  describe('/info', () => {
    it('GET /info should be JSON', (done) => {
      chai.request(server)
      .get('/info')
      .end((err, res) => {
        res.should.have.header('content-type', 'application/json; charset=utf-8')
        res.should.have.status(200)
        res.req.res.body.should.exist

        done()
      })
    })

    it('GET /info?interfaces=1 should include network interface(s) information', (done) => {
      chai.request(server)
      .get('/info')
      .query({interfaces: 1})
      .end((err, res) => {
        res.should.have.header('content-type', 'application/json; charset=utf-8')
        res.should.have.status(200)
        res.req.res.body.network.should.exist
        res.req.res.body.network.interfaces.should.exist

        done()
      })
    })

    it('GET /info?environment=1 should include environment information', (done) => {
      chai.request(server)
      .get('/info')
      .query({environment: 1})
      .end((err, res) => {
        res.should.have.header('content-type', 'application/json; charset=utf-8')
        res.should.have.status(200)
        res.req.res.body.environment.should.exist

        done()
      })
    })
  })
})
