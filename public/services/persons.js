'use strict';

angular.module('seedApp').factory('Persons', ['$resource',
  function($resource) {
    var url = './api/demo/persons/';
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
