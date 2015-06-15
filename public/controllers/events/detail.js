'use strict';

angular.module('seedApp')
.controller('DetailController', [
  '$scope',
  '$state',
  'Global',
  'Event',
  function($scope, $state, Global, Event) {

    $scope.event = {};
    $scope.events = [];
    $scope.talks = [];
    $scope.participants = [];

    $scope.loadEvents = function() {
      Event.query({}, function(reponse) {
        $scope.events = reponse;
      });
    };

    $scope.loadEvent = function() {
      Event.get({id: $state.params.id}, function(reponse) {
        $scope.event = reponse;
      });
    };
  }
]);
