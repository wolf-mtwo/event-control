'use strict';

angular.module('seedApp').factory('Talks', ['$resource',
  function($resource) {
    var url = './api/events/talk/eventId/:eventId/';
    return $resource(url, {
    }, {
      update: {
        method: 'PUT'
      },
      save: {
      	// url: url + '/talk/:talkId',
      	method: 'POST'
      }
    });
  }
]);
