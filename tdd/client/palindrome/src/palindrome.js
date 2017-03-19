var isPalindrome = function(phraseToTest) {
	var hasContent = function(phraseToTest) {
		return phraseToTest && phraseToTest.trim();
	};

	var hasPunctuation = function(phraseToTest) {
		return phraseToTest.match(/[^A-Za-z\s]/);
	};

	var validateArguments = function(toValidate) {
		if (toValidate.length == 0) {
			throw TypeError('Phrase required');
		}

		if (toValidate.length > 1) {
			throw TypeError('Only one phrase accepted');
		}

		if (typeof toValidate[0] !== "string") {
			throw TypeError('Only strings accepted')
		}
	};

	validateArguments(arguments);

	if (! hasContent(phraseToTest)) {
		return false;
	} else if (hasPunctuation(phraseToTest)) {
		return false;
	}

	return phraseToTest.split('').reverse().join('').toLowerCase() == phraseToTest.toLowerCase();
};
