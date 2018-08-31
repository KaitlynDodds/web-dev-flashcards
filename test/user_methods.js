const expect = require('chai').expect;

describe('USER METHODS', () => {

    describe('isValidUsername', () => {
        const isValidUsername = require('../app_logic/user_methods.js').isValidUsername;

        it('should return true for valid username', () => {
            const username = 'cuddlyBear123';

            expect(isValidUsername(username)).to.be.a('boolean');
            expect(isValidUsername(username)).to.be.true;
        });

        it('should return false for username that is too short (< 5 characters)', () => {
            const validUsername = 'abc12'; // 5 characters
            const invalidUsername1 = '';
            const invalidUsername2 = 'abc1';

            expect(isValidUsername(invalidUsername1)).to.be.a('boolean');

            expect(isValidUsername(validUsername)).to.be.true;
            expect(isValidUsername(invalidUsername1)).to.be.false;
            expect(isValidUsername(invalidUsername2)).to.be.false;
        });

        it('should return false for username that is too long (> 25 characters)', () => {
            const validUsername = 'googleyBearHowAreYouToday';  // 25 characters
            const invalidUsername1 = 'googleyBearHowAreYouToday1234';

            expect(isValidUsername(invalidUsername1)).to.be.a('boolean');
            
            expect(isValidUsername(validUsername)).to.be.true;
            expect(isValidUsername(invalidUsername1)).to.be.false;
        });

        it('should throw TypeError for username that is undefined or null', () => {
            let handler;
            
            const invalidUsername1 = undefined;
            const invalidUsername2 = null;

            handler = function () { isValidUsername(invalidUsername1) };
            expect(handler).to.throw(TypeError);

            handler = function () { isValidUsername(invalidUsername2) };
            expect(handler).to.throw(TypeError);
        });

        it('should throw TypeError if username is not a string', () => {
            let handler;

            const validUsername     = 'aStringIsOkay';

            const invalidUsername1  = NaN;
            const invalidUsername2  = 200;
            const invalidUsername3  = false;
            const invalidUsername4  = 1.5;

            handler = function() { isValidUsername(validUsername) };
            expect(handler).to.not.throw();
            
            handler = function() { isValidUsername(invalidUsername1) };
            expect(handler).to.throw(TypeError);
            
            handler = function() { isValidUsername(invalidUsername2) };
            expect(handler).to.throw(TypeError);
            
            handler = function() { isValidUsername(invalidUsername3) };
            expect(handler).to.throw(TypeError);
            
            handler = function() { isValidUsername(invalidUsername4) };
            expect(handler).to.throw(TypeError);
        });

    });

    describe('newUser', () => {
        const newUser = require('../app_logic/user_methods').newUser;

        it('should return an object when given valid username', () => {
            const validUsername = 'cuddlyBearToots';

            const actual = newUser(validUsername);

            expect(actual).to.be.an('object');
        });

        it('should return valid user object', () => {
            const validUsername = 'cuddlyBearToots';

            const actual = newUser(validUsername);

            expect(actual).to.have.property('username', validUsername);
            expect(actual).to.have.property('login-time');

        });

        it('should throw TypeError when given invalid username', () => {
            let handler; 

            const invalidUsername0 = 'someoneOnceToldMeTheWorldWasGonnaTurnMe';  // over 25 characters
            const invalidUsername1 = 'abc';                                      // under 5 characters
            const invalidUsername2 = undefined;                                  // undefined value

            handler = function () { newUser(invalidUsername0) };
            expect(handler).to.throw(TypeError);

            handler = function () { newUser(invalidUsername1) };
            expect(handler).to.throw(TypeError);

            handler = function () { newUser(invalidUsername2) };
            expect(handler).to.throw(TypeError);
        });

    });

});