var isPalindrome = function(phrase) {
	// The caller must supply an argument
	if (! arguments.length) {
		throw new Error('Invalid argument');
	}

	// An empty phrase is **not** a palindrome
	if (phrase.length == 0) {
		return false;
	}

	return makeCanonical(phrase).split('').reverse().join('') === makeCanonical(phrase);
};

// A "canonical" phrase in this context:
//
// * Has no punctuation
// * Has no whitespace
// * Is composed of all lower case characters.
function makeCanonical(phrase) {
	var punctuationRegEx = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
	var whitespaceRegEx = /\s+/g;
	var result = phrase.replace(punctuationRegEx, '').replace(whitespaceRegEx, '').toLowerCase();
	return result;
}
