(function() {
    'use strict';

    angular.module('app.js.config')

        .factory('progressInterceptor', [function() {
            var ngProgress = angular.injector(['ng', 'ngProgress']).get('ngProgress');
            var stack = 0;
            return {
                request: function(config) {
                    stack++;
                    if (ngProgress.status() == 0) {
                        ngProgress.start();
                    }
                    return config;
                },
                response: function(response) {
                    stack--;
                    if (stack == 0) {
                        ngProgress.complete();
                    }
                    return response;
                }
            };
        }])
    ;
})();