const request = require('supertest');
const expect = require('expect');

var app = require('./server').app; 

describe('Server', () => {
    describe('Get /', () => {
        it('should return hello world', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: "Page not found"
                });
            })
            .end(done);
        });
    });
    
    describe('Get /user', () => {
        it('should return samlak details', (done) => {
            request(app)
            .get('/user')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: "samlak",
                    age: 20
                });
            })
            .end(done);
        });
    });
});