(function() {
    'use strict';

    angular.module('app.js.config', [])

        .config(['$locationProvider', function($locationProvider) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

        }])

        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('progressInterceptor');
        }])
    ;
})();