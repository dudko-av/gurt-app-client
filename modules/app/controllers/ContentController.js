(function () {
	'use strict';

	angular
		.module('app')
		.controller('ContentController', ContentController);

	ContentController.$inject = ['$scope', '$stateParams', '$location', 'BaseNews'];

	function ContentController($scope, $stateParams, $location, BaseNews) {
		//debugger;
	}

})();
