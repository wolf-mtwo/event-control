'use strict';

angular.module('seedApp').factory('Talks', ['$resource',
  function($resource) {
    var url = './api/events/talk/eventId/:eventId/';
    return $resource(url, {
    }, {
      update: {
        method: 'PUT'
      },
      get: {
        url: url + 'talkId/:id',
        method: 'GET'
      },
      save: {
      	// url: url + '/talk/:talkId',
      	method: 'POST'
      },
      remove: {
        url: url + 'talkId/:id',
        method: 'DELETE'
      }
    });
  }
]);
