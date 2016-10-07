/*
 * Test ideas
 *
 */

var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome-test', function() {
	it('should pass the canary test', function() {
		expect(true).to.be.true;
	});

	it('should return true when passed "mom"', function() {
		expect(isPalindrome('mom')).to.be.true;
	});

	it('should return true when passed "dad"', function() {
		expect(isPalindrome('dad')).to.be.true;
	});

	it('should return false when passed "dude"', function() {
		expect(isPalindrome('dude')).to.be.false;
	});

	it('should return true when passed "mom mom"', function() {
		expect(isPalindrome('mom mom')).to.be.true;
	});

	it('should return false when passed "dad dae"', function() {
		expect(isPalindrome('dad dae')).to.be.false;
	});
});
