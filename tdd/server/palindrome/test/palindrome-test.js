var expect = require("chai").expect;
var isPalindrome = require("../src/palindrome");

/*
 * Test ideas
 * 'mom mom' is a palindrome
 * 'mom mon' is not a palindrome
 * '' is not a palindrome
 * '  ' is not a palindrome
 * ' mom mom' is a palindrome
 * ' mom mom ' is a palindrome
 * 'mom  mom' is a palindrome
 */

describe("palindrome", function() {
	it("should pass this canary test", function() {
		expect(true).to.be.true;
	});

	it("should return true for 'mom'", function() {
		var toTest = "mom";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return true for 'dad'", function() {
		var toTest = "dad";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return false for 'dude'", function() {
		var toTest = "dude";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

});

