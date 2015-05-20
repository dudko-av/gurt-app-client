(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$httpProvider'];

    function config ($locationProvider, $httpProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.interceptors.push('progressInterceptor');
    }

})();