'use strict';

angular.module('seedApp').factory('Session', ['$resource',
  function($resource) {
    var url = './api/session/';
    return $resource(url + 'login', {
    }, {
      validate: {
        url: url + 'state',
        method: 'GET'
      },
      login: {
        method: 'POST'
      }
    });
  }
]);
