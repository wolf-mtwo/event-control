'use strict';

angular.module('seedApp').factory('Store', ['localStorageService',
  function(localStorageService) {

    var validateKey = function(key) {
      if (!key) {
        throw new Error('key is undefined');
      }
    }

    return {
      save: function(key, value) {
        validateKey(key);
        if (!value) {
          throw new Error('value is undefined');
        }
        localStorageService.set(key, value);
      },
      get: function(key) {
        validateKey(key);
        return localStorageService.get(key);
      },
      remove: function(key) {
        validateKey(key);
        localStorageService.remove(key);
      }
    }
  }
]);
