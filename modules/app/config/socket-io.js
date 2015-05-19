(function() {
    'use strict';

    angular.module('app.js.config')

        .factory('socketIO', ['socketFactory', function (socketFactory) {
            return socketFactory();
        }])
    ;

})();