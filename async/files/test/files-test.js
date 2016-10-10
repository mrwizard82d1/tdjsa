var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function() {
	it('should return correct line count for a valid file', function(done) {
		var callback = function(count) {
			expect(count).to.be.eql(15);
		};

		linesCount('src/files.js', callback);
		done();
	});

	it('should report an error for an invalid file name', function(done) {
		var onError = function(error) {
			expect(error).to.be.eql('unable to open file src/files.js');
			done();
		};

		linesCount('src/files.js', function() { return undefined; }, onError);
		done();
	});
});
