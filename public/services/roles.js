'use strict';

angular.module('seedApp').factory('Roles', ['Sessions',
  function(Sessions) {
    var user = Sessions.validate(function(response) {
      console.log(response);
    })
    return {
      login: function() {
        return user;
      },
      session: function() {
        return {
          id: 1000
        }
      }
    }
  }
]);
