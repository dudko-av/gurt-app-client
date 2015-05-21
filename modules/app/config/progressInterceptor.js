(function() {
    'use strict';

    angular
        .module('app')
        .factory('progressInterceptor', progressInterceptor);

    function progressInterceptor () {
        var ngProgress = angular.injector(['ng', 'ngProgress']).get('ngProgress');
        //var stack = 0;
        return {
            request: function(config) {
                ngProgress.start();
                return config;
            },
            response: function(response) {
                ngProgress.complete();
                return response;
            }
        };
    }

})();