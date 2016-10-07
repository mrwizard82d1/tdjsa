var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome-test', function() {
	it('should pass the canary test', function() {
		expect(true).to.be.true;
	});

	it('should return true when passed "mom"', function() {
		expect(isPalindrome('mom')).to.be.true;
	});
});
