const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app')

describe('App', () => {
    var db = { 
        savedUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('samlak', 40);
        expect(spy).toHaveBeenCalledWith('samlak', 40);
    }); 

    // it('should saveUser object', () => {
    //     var email = "samlak1999@gmail.com";
    //     var password = "344ffr5";
    //     app.handleSignup(email, password);
    //     expect(db.savedUser).toHaveBeenCalledWith({email, password});
    // }) 
});