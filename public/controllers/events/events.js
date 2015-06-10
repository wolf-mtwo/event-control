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

    $scope.removeEvent = function(item) {
      var itemParams = {
        id: $state.params.id
      };
      item.$remove(itemParams, function(response) {
        $state.go('events.list');
      });
    }
  }
]);
