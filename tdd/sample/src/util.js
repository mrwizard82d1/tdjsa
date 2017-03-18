var isNumeric = function(toTest) {
	return (typeof toTest === 'number' && ! isNaN(toTest));
};

var validateFahrenheit = function(temperatureF) {
	if (! isNumeric(temperatureF)) {
		throw new TypeError('Argument, <' + temperatureF + '>, is not a number.');
	};
};

module.exports = function() {
	this.f2c = function(temperatureF) {
		validateFahrenheit(temperatureF);

		return (temperatureF - 32) * 5 / 9;
	};
}

