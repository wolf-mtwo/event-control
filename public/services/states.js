'use strict';

angular.module('seedApp').factory('States', ['$resource',
  function($resource) {
    var url = './api/talk/state/';
    return $resource(url, {
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
