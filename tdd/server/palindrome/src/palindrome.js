module.exports = function(phrase) {
	var punctuationRegEx = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
	var phraseToTest = phrase.replace(punctuationRegEx, '').replace(/\s/g, '').toLowerCase();

	return phraseToTest.toLowerCase().split('').reverse().join('') === phraseToTest.toLowerCase();
};
