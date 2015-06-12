'use strict';

angular.module('seedApp')
.controller('QrcodeController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Participants',
  function($scope, $state, Global, Store, Participants) {

    $scope.participants = {};

    $scope.loadParticipants = function() {
      var itemParams = {
        eventId: $state.params.id
      };
      Participants.query(itemParams, function(participants) {
        // $scope.buildUrl(response);
        var code = 'http://localhost/';
        participants.forEach(function(participant) {
          participant.code = code;
        })
        // for (var i in participants) {
        //   console.log(participants[i]);
        //   // participants[i].code = code;
        // };
        $scope.participants = participants;
      });
    }

    $scope.buildUrl = function(participants) {
      var code = 'http://localhost/';
      for (var i in participants) {
        participants[i].code = code;
      };
      $scope.participants = participants;
    }

    $scope.build = function(participant) {
      var url =  'http://localhost/';
    }
  }
]);
