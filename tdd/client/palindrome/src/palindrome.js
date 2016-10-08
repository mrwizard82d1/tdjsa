var isPalindrome = function(phrase) {
	// An empty phrase is **not** a palindrome
	if (phrase.length == 0) {
		return false;
	}

	return phrase.split('').reverse().join('') === phrase;
};
