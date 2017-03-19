describe("palindrome", function() {
	it("should return true a canary test", function() {
		expect(true).to.be.true;
	});

	it("should return true for 'mom'", function() {
		var toTest = "mom";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return true for 'Dad'", function() {
		var toTest = "Dad";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return false for 'dude'", function() {
		var toTest = "dude";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return true for 'mom mom'", function() {
		var toTest = "mom mom";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.true;
	});

	it("should return false for 'mom mon'", function() {
		var toTest = "mom mon";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return false for ''", function() {
		var toTest = "";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should return false for '  '", function() {
		var toTest = "  ";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

});

