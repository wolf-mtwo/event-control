'use strict';

angular.module('seedApp').factory('Sessions', ['$resource',
  function($resource) {
    var url = './api/session/';
    return $resource(url + 'login', {
    }, {
      validate: {
        url: url + 'state',
        method: 'GET'
      },
      // delete: {
      //   url: url + 'id/:id',
      //   method: 'DELETE'
      // },
      // update: {
      //   method: 'PUT'
      // }
    });
  }
]);
