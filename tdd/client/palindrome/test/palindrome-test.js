describe('palindrome-client-tests', function(){
	it('should pass this canary test', function() {
		expect(true).to.be.true;
	});

	it('should return true for "mom"', function() {
		expect(isPalindrome('mom')).to.be.true;
	});

	it('should return true for "dad"', function() {
		expect(isPalindrome('dad')).to.be.true;
	});

	it('should return false for "dude"', function() {
		expect(isPalindrome('dude')).to.be.false;
	});
});
