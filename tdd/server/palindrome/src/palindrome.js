module.exports = function(phraseToTest) {
	var reversedWordToTest = phraseToTest.trim().split('').reverse().join('');
	return phraseToTest.trim() == reversedWordToTest;
};
