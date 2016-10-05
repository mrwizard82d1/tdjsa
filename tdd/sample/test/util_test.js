// Load the 'chai' module. 
//
// Use the `expect` property of that module to verify assertions.
//
var expect = require('chai').expect;

// The `describe` function defines a test suite. The first argument defines the name of the suite (used by mere mortals to 
// identify the suite). The second argument is a function that contains all the tests in the suite.
describe('util tests', function() { 
	// Each test is defined by the `it` function. Again, the first agument specifies the name used by people to identify the
	// test. The second argument is the actual test.
	it('should pass this canary test', function() {
		expect(true).to.eql(true);
	});
	it('should return 0 Celsius when converting 32 Farhrenheit', function() {
	    expect(f2c(32)).to.eql(0);	
	})
});

function f2c(degreesFahrenheit) {
    return 0;
};
