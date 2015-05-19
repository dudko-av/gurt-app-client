(function() {
    'use strict';

    angular.module('app.js.directives')

        .directive('fixedHeader', [function() {
            return {
                restrict: 'AEC',
                //scope: {},
                link: function(scope, elem, attrs) {
                    scope.fixed = false;
                    scope.goUp = function() {
                        //console.log('go up');
                        angular.element('html, body').animate({scrollTop: 0}, {
                            duration: 600,
                            specialEasing: {
                                scrollTop: "easeOutExpo"
                            }
                        });
                    };
                    angular.element(window).on('scroll', function(e) {
                        var scrollTop = angular.element(window).scrollTop();
                        if (scrollTop >= angular.element('.layout-header').height()) {
                            elem.addClass('layout-navbar-fixed');
                            if (scope.fixed != true) {
                                scope.$apply(function() {
                                    scope.fixed = true;
                                });
                                //console.log(scope.fixed);
                            }
                        } else {
                            elem.removeClass('layout-navbar-fixed');
                            if (scope.fixed != false) {
                                scope.$apply(function () {
                                    scope.fixed = false;
                                });
                                //console.log(scope.fixed);
                            }
                        }
                    });
                }
            };
        }])
    ;

})();