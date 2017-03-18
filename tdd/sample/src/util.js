module.exports = function() {
	this.f2c = function(temperatureF) {
		if (typeof temperatureF !== 'number' || isNaN(temperatureF)) {
			throw new TypeError('Argument, <' + temperatureF + '>, is not a number.');
		};
		return (temperatureF - 32) * 5 / 9;
	};
}

