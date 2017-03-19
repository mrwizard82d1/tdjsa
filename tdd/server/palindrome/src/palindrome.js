module.exports = function(phraseToTest) {
	if (arguments.length < 1) {
		throw TypeError('Argument required');
	}
	else if (arguments.length > 1) {
		throw TypeError('Exactly one argument required')
	}
	else if (typeof phraseToTest !== "string") {
		throw TypeError('String argument required')
	}

	if (!phraseToTest || !phraseToTest.trim()) {
		return false;
	}
	else if (phraseToTest.match(/[^A-Za-z\s]/)) {
		return false;
	}

	console.log(`phraseToTest=${phraseToTest}`);
	var reversedWordToTest = phraseToTest.trim().split('').reverse().join('');
	return phraseToTest.trim() == reversedWordToTest;
};
