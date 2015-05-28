'use strict';

angular.module('seedApp').factory('Store', ['localStorageService',
function(localStorageService) {

  return {
    save: function(key, value) {
      if (!key) {
        throw new Error('key is undefined');
      }
      if (!value) {
        throw new Error('value is undefined');
      }
      localStorageService.set(key, value);
    }
  }
}
]);
