'use strict';

angular.module('seedApp').factory('Atts', ['$resource',
  function($resource) {
    var url = './api/talk/att/';
    return $resource(url, {
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
