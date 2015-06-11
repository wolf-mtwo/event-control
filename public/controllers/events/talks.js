'use strict';

angular.module('seedApp')
.controller('TalksController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Talks',
  function($scope, $state, Global, Store, Talks) {

    $scope.talk = {};
    $scope.params = $state.params;

    $scope.loadTalk = function() {
      var itemParams = {
        eventId: $state.params.id,
        talkId: $state.params.talkId
      };
      Talks.get(itemParams, function(response) {
        $scope.talk = response;
      });
    }

    $scope.loadTalks = function() {
      var itemParams = {
        eventId: $state.params.id
      };
      Talks.query(itemParams, function(response) {
        $scope.talks = response;
      }); 
    }

    $scope.create = function(item) {
      var itemParams = {
        eventId: $state.params.id
      };
      Talks.save(itemParams, item, function(response) {
      	console.log(response);
        $scope.talks.push(response);
      });
    }

    $scope.remove = function(item) {
      var itemParams = {
        eventId: $state.params.id,
        id: $state.params.talkId
      };
      item.$remove(itemParams, function(response) {
        console.log(response);
        $state.go('events.detail.talks');
      });
    }
  }
]);
