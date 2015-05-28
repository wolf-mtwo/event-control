'use strict';

angular.module('seedApp').factory('Roles', ['Sessions',
  function(Sessions) {
    // var user = Sessions.validate(function(response) {
    //   console.log(response);
    // })
    // var user = Sessions.validate(function(response) {
    //   console.log(response);
    // })
    return {
      login: function(item, callback) {
        if (!item) {
          throw new Error('item is undefined');
        }
        if (!(callback instanceof Function)) {
          throw new Error('callback is not function');
        }
        Sessions.login(item, function(response) {
          callback(response);
        })
      },
      session: function() {
        return {
          id: 1000
        }
      }
    }
  }
]);
