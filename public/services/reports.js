'use strict';

angular.module('seedApp').factory('Reports', ['$resource',
  function($resource) {
    var url = './api/report/attendance/eventId/:eventId';
    return $resource(url, {
    }, {
      attendance: {
        isArray: true,
        method: 'GET'
      }
    });
  }
]);
