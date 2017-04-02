describe('tasks controller tests', function() {
	// Write canary test only if this is the first test for the front end in this project.
	it('should pass this canary test', function() {
		expect(true).to.be.true;
	});

	var controller;

	beforeEach(module('todoapp'));

	beforeEach(inject(function($controller) {
		controller = $controller('TasksController');
	}));

	it('tasks should be empty on create', function() {
		expect(controller.tasks).to.be.eql([]);
	});

	it('message should be an empty string on create', function() {
		expect(controller.message).to.be.eql('');
	});
});

