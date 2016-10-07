module.exports = function(phrase) {
	return phrase.toLowerCase().split('').reverse().join('') === phrase.toLowerCase();
};
