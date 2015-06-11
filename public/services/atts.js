'use strict';

angular.module('seedApp').factory('Atts', ['$resource',
  function($resource) {
    var url = './api/talk/att/talkId/:talkId';
    return $resource(url, {
    }, {
      update: {
        method: 'PUT'
      },
      attendance: {
        url: './api/talk/attendance/talkId/:talkId',
        method: 'GET',
        isArray: true
      }
    });
  }
]);
