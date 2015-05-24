(function() {
    'use strict';

    angular
        .module('app')
        .factory('progressInterceptor', progressInterceptor);

    function progressInterceptor () {
        var ngProgress = angular.injector(['ng', 'ngProgress']).get('ngProgress');

        return {
            request: request,
            response: response
        };

        function request (config) {
            ngProgress.start();
            return config;
        }

        function response (res) {
            ngProgress.complete();
            return res;
        }
    }

})();
