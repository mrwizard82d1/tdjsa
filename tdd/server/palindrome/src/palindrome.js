module.exports = function(phraseToTest) {
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
