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

	it("should return false for 'ma'am'", function() {
		var toTest = "ma'am";

		var actualResult = isPalindrome(toTest);

		expect(actualResult).to.be.false;
	});

	it("should throw `TypeError` if passed no arguments", function() {
		var wrapper = function() {
			isPalindrome();
		};

		expect(wrapper).to.throw(TypeError, /Phrase required/);
	});

	it("should throw `TypeError` if passed more than one argument", function() {
		var wrapper = function() {
			isPalindrome("mom", "dude");
		};

		expect(wrapper).to.throw(TypeError, /Only one phrase accepted/);
	});

	it("should throw `TypeError` if passed non-string argument", function() {
		var wrapper = function() {
			isPalindrome(3.14159);
		};

		expect(wrapper).to.throw(TypeError, /Only strings accepted/);
	});

});

