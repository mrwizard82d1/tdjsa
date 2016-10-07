/*
 * Test ideas
 *
 * 'dad' is a palindrome
 * 'dude' is not a palindrome
 * 'mom mom' is a palindrome
 * 'dad dae' is a palindrome'
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
});
