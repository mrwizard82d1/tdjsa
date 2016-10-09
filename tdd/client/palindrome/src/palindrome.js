var isPalindrome = function(phrase) {
	// The caller must supply an argument
	if (! arguments.length) {
		throw new Error('Invalid argument');
	}

	// An empty phrase is **not** a palindrome
	if (phrase.length == 0) {
		return false;
	}

	return phrase.toLowerCase().split('').reverse().join('') === phrase.toLowerCase();
};
