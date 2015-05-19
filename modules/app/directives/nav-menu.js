(function () {
	'use strict';

	angular
		.module('app')
		.directive('navMenu', navMenu);

	function navMenu() {
		var directive = {
			restrict: 'AEC',
			link: link,
		};

		return directive;

		function link(scope, elem, attrs) {
			var ul = elem.find('ul');
			elem.hover(function() {
				ul.css('display', 'block');
			}, function() {
				ul.css('display', 'none');
			});
			//debugger;
		}
	}

})();