'use strict';

angular.module('seedApp').factory('Event', ['$resource',
  function($resource) {
    var url = 'api/events/event';
    return $resource(url, {
    }, {
      get: {
        url: url + '/id/:id',
        method: 'GET'
      },
      update: {
        method: 'PUT'
      }
    });
  }
]);
