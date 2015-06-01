'use strict';

angular.module('seedApp')
.controller('EventsController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Event',
  function($scope, $state, Global, Store, Event) {
    $scope.logout = function() {
      Store.remove('session');
      Global.user = null;
      $state.go('home');
    };
  }
]);
