var expect = require('chai').expect;
var Util = require('../src/util');

describe('util tests', function() {
	it('should pass the canary test', function() {
		expect(true).to.eql(true);
	});

	var util
	beforeEach(function() {
		util = new Util();
	});

	it('should return 0C for 32F', function() {
		var temperatureF = 32;

		var actualC = util.f2c(temperatureF);

		expect(actualC).to.eql(0);
	});

	it('should return 10C for 50', function() {
		var temperatureF = 50;

		var actualC = util.f2c(temperatureF);

		expect(actualC).to.eql(10);
	});
});

