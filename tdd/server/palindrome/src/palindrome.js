module.exports = function(wordToTest) {
	var reversedWordToTest = wordToTest.split('').reverse().join('');
	return wordToTest == reversedWordToTest;
};
