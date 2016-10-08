describe('palindrome-client-tests', function(){
	it('should pass this canary test', function() {
		expect(true).to.be.true;
	});
	it('should return true for "mom"', function() {
		expect(isPalindrome('mom')).to.be.true;
	});
});
