module.exports = function() {
	this.f2c = function(temperatureF) {
		return (temperatureF - 32) * 5 / 9;
	};
}

