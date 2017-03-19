module.exports = function(phraseToTest) {
	var validateArguments = function(argsToValidate) {
		if (argsToValidate.length < 1) {
			throw TypeError('Argument required');
		}
		else if (argsToValidate.length > 1) {
			throw TypeError('Exactly one argument required')
		}
		else if (typeof argsToValidate[0] !== "string") {
			throw TypeError('String argument required')
		}
	};

	var hasContent = function(phraseToTest) {
		return phraseToTest && phraseToTest.trim()
	};

	var hasPunctuation = function(phraseToTest) {
		return phraseToTest.match(/[^A-Za-z\s]/);
	};

	validateArguments(arguments);

	if (!hasContent(phraseToTest)) {
		return false;
	}
	else if (hasPunctuation(phraseToTest)) {
		return false;
	}

	var reversedWordToTest = phraseToTest.trim().split('').reverse().join('');
	return phraseToTest.trim() == reversedWordToTest;
};
