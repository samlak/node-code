const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('@add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44){
            //     throw new Error(`Expecting the result to be 44 but ${res}`);
            // }
        });
        
        it('should add two numbers aysnc', (done) => {
            utils.asyncAdd(33, 11, (sum) => {
                expect(sum).toBe(44).toBeA('number');
                done();
            });
        });
    });
    
    it('should square the number', () => {
        var res = utils.square(9);
        expect(res).toBe(81).toBeA('number');
        // if(res !== 81){
        //     throw new Error(`Expecting the result to be 81 but ${res}`);
        // }
    });
    
    it('should square the number aysnc', (done) => {
        utils.asyncSquare(9, (res) => {
            expect(res).toBe(81).toBeA('number');
            done();
        });
    });
    it('first name and second name should be set', () => {
        var user = {
            age: 20,
            location: "Nigeria"
        }
        var res = utils.setName(user, "salami harun");
        expect(res).toInclude({
            firstName: 'salami',
            lastName: 'harun',
        });
    });
});
// it('should expect some value', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'samlak'}).toBe({name: 'samlak'});
//     // expect({name: 'samlak'}).toEqual({name: 'Samlak'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: "samlak",
//         age: 20,
//         location: "globe"
//     }).toExclude({
//         name: "samla"
//     })
// });