var SampleController = function($filter) {
	var controller = this;

	alert("processing");
	controller.greet = $filter("lowercase")("HELLO");
}

angular.module("sample", [])
	   .controller("SampleController", SampleController);

