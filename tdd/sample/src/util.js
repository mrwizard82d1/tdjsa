module.exports = function() {
	this.f2c = function(temperatureF) {
		if (typeof temperatureF !== 'number') {
			throw new TypeError('Argument, <' + temperatureF + '>, is not a number.');
		};
		return (temperatureF - 32) * 5 / 9;
	};
}

