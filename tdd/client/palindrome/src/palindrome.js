var isPalindrome = function(phraseToTest) {
	var hasContent = function(phraseToTest) {
		return phraseToTest && phraseToTest.trim();
	};

	if (! hasContent(phraseToTest)) {
		return false;
	}

	return phraseToTest.split('').reverse().join('').toLowerCase() == phraseToTest.toLowerCase();
};
