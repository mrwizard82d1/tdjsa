module.exports = function(phraseToTest) {
	var reversedWordToTest = phraseToTest.split('').reverse().join('');
	return phraseToTest == reversedWordToTest;
};
