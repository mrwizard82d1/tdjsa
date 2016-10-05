module.exports = function() {
    this.f2c = function(degreesFahrenheit) {
        var result = (degreesFahrenheit - 32) * 5 / 9;

		return result;
    };
};
