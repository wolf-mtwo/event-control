'use strict';

angular.module('seedApp').factory('Users', ['$resource',
  function($resource) {
    var url = './api/register/users/';
    return $resource(url, {
    }, {
      get: {
        url: url + 'id/:id',
        method: 'GET',
        isArray: true
      },
      delete: {
        url: url + 'id/:id',
        method: 'DELETE'
      },
      update: {
        method: 'PUT'
      }
    });
  }
]);
