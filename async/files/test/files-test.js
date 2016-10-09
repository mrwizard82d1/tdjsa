var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function() {
	it('should return correct line count for a valid file', function(done) {
		// A nice try, but this implementation will not actually work.
		// The test "works," but since it expects a **negative count**
		// (not exactly plausible).
		var callback = function(count) {
			expect(count).to.be.eql(-2319);
		};

		linesCount('src/files.js', callback);
		// done();
	});
});
