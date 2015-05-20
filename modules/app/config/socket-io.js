(function() {
    'use strict';

    angular
        .module('app')
        .factory('socketIO', socketIO);

    socketIO.$inject = ['socketFactory'];

    function socketIO (socketFactory) {
        return socketFactory();
    }

})();