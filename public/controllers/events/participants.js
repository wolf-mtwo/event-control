
angular.module('seedApp')
.controller('ParticipantsController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Participants',
  function($scope, $state, Global, Store, Participants) {

    $scope.loadParticipants = function() {
      var itemParams = {
        eventId: $state.params.id
      };
      Participants.query(itemParams, function(response) {
        $scope.participants = response;
      }); 
    }

    $scope.create = function(item) {
     
      var itemParams = {
        eventId: $state.params.id
      };
      Participants.save(itemParams, item, function(response) {
      	console.log(response);
        $scope.talks.push(response);
      });
    }
  }
]);
