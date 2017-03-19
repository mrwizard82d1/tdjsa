var expect = require("chai").expect;
var isPalindrome = require("../src/palindrome");

/*
 * Test ideas
 * "ma'am" is not a palindrome
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

	it("should return true for 'maam'", function() {
		var toTest = "maam";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return true for 'mom mom'", function() {
		var toTest = "mom mom";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return false for 'mom mon'", function() {
		var toTest = "mom mon";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return false for ''", function() {
		var toTest = "";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return false for '  '", function() {
		var toTest = "  ";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return true for ' mom mom'", function() {
		var toTest = " mom mom";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return true for ' mom mom  '", function() {
		var toTest = " mom mom";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return false for 'ma'am'", function() {
		var toTest = "ma'am";

		actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

});

