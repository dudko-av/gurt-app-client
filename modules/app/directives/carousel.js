(function() {
    'use strict';

    angular.module('app.js.directives')

        .directive('gtCarousel', ['$injector', function($injector) {
            return {
                restrict: 'AEC',
                replace: false,
                scope: true,
                template: '',
                link: function(scope, elem, attrs) {
                    var BaseNews = $injector.get('BaseNews');
                    var $interval = $injector.get('$interval');

                    var filter = {
                        filter: {
                            limit: 10,
                            order: 'id DESC',
                            where: {
                                carusel: true
                            },
                            include: ['authUser', 'baseNewstypes']
                        }
                    };
                    var interval;

                    function loadNews() {
                        BaseNews.find(filter).$promise.then(function success(baseNews) {
                            scope.baseNews = baseNews;//debugger;
                            startSlide();
                        });
                    } loadNews();

                    function startSlide() {
                        interval = $interval(function() {
                            scope.nextSlide();
                        }, 5000);
                    }

                    scope.active = 0;
                    scope.prevSlide = function() {
                        scope.active = scope.active == 0 ? (scope.baseNews.length - 1) : scope.active - 1;
                    };
                    scope.nextSlide = function() {
                        scope.active = (scope.baseNews.length - 1) == scope.active ? 0 : scope.active + 1;
                        scope.imgView = true;
                        var wrapperWidth = elem.find('.panel-footer .wrapper').width();
                        var width = elem.find('.panel-footer li')[scope.active]; //debugger;
                    };
                    scope.showSlide = function(index) {
                        scope.active = index;
                    };
                    elem.on('click', function() {
                        $interval.cancel(interval);
                    });
                }
            };
        }])
    ;
})();