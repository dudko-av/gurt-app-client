(function() {
    'use strict';

    angular
	    .module('app')
        .directive('fixedHeader', fixedHeader);

	fixedHeader.$inject = [];

	function fixedHeader () {
		var directive = {
			restrict: 'AEC',
			scope: {},
			link: link
		};

		return directive;

		function link (scope, elem, attrs) { //debugger;
			var goUp = elem.find('.go-up');
			toggleFixed();

			goUp.click(function () { //debugger;
				angular.element('html, body').animate({scrollTop: 0}, {
					duration: 600,
					specialEasing: {
						scrollTop: "easeOutExpo"
					}
				});

				//return false;
			});

			angular.element(window).on('scroll', function(e) {
				toggleFixed();
			});

			function toggleFixed() {
				var scrollTop = angular.element(window).scrollTop();
				if (scrollTop >= angular.element('.layout-header').height()) {
					elem.addClass('layout-navbar-fixed');
					goUp.show();
				} else {
					elem.removeClass('layout-navbar-fixed');
					goUp.hide();
				}
			}
		}
	}



})();