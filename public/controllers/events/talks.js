'use strict';

angular.module('seedApp')
.controller('TalksController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Talks',
  function($scope, $state, Global, Store, Talks) {

    $scope.loadTalks = function() {
      var itemParams = {
        eventId: $state.params.id
      };
      Talks.query(itemParams, function(response) {
        $scope.talks = response;
      }); 
    }

    $scope.create = function(item) {
     
      // item.event = $state.params.id
      // console.log(item);
      var itemParams = {
        eventId: $state.params.id
      };
      Talks.save(itemParams, item, function(response) {
      	console.log(response);
        $scope.talks.push(response);
      });
    }
  }
]);
