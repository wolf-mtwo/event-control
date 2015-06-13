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
        participants.forEach(function(participant) {
          participant.code = $scope.buildUrl(participant);
        });
        $scope.participants = participants;
      });
    }

    $scope.buildUrl = function(participant) {
      var str = 'eid/{0}/pid/{2}';
      var eventId = $state.params.id;
      var participantId = participant.id;
      str = str.replace('{0}', eventId)
      .replace('{2}', participantId);
      var code = [
        'http://',
        location.host,
        location.pathname,
        'attendance/talk/',
        str
      ].join('');
      console.log(code);
      return code;
    }

    $scope.build = function(participant) {
      var url =  'http://localhost/';
    }
  }
]);
;