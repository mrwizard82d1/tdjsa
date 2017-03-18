var isNumeric = function(toTest) {
	return (typeof toTest === 'number' && ! isNaN(toTest));
};

module.exports = function() {
	this.f2c = function(temperatureF) {
		if (! isNumeric(temperatureF)) {
			throw new TypeError('Argument, <' + temperatureF + '>, is not a number.');
		};
		return (temperatureF - 32) * 5 / 9;
	};
}

