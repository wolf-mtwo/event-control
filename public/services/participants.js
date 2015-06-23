'use strict';

angular.module('seedApp').factory('Participants', ['$resource',
  function($resource) {
    var url = './api/events/participant/eventId/:eventId/';
    return $resource(url, {
    }, {
      update: {
        url: url + 'participantId/:id',
        method: 'PUT'
      },
      save: {
        // url: url + '/talk/:talkId',
        method: 'POST'
      },
      get: {
        url: url + 'participantId/:id',
        method: 'GET'
      },
      remove: {
        url: url + 'participantId/:id',
        method: 'DELETE'
      }
    });
  }
]);
