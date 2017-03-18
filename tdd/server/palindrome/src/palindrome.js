module.exports = function(phraseToTest) {
	if (!phraseToTest || !phraseToTest.trim()) {
		return false;
	}
	var reversedWordToTest = phraseToTest.trim().split('').reverse().join('');
	return phraseToTest.trim() == reversedWordToTest;
};
