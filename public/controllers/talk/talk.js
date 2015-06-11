'use strict';

angular.module('seedApp')
.controller('TalkController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Talks',
  'Participants',
  'States',
  'Atts',
  function(
    $scope,
    $state,
    Global,
    Store,
    Talks,
    Participants,
    States,
    Atts
  ) {

    $scope.talk = {};
    $scope.participants = [];
    States.query(function(response) {
      console.log(response);
      $scope.states = response;
    })

    $scope.loadTalkController = function() {
      $scope.loadTalk();
      $scope.loadParticipants();
    };

    $scope.loadTalk = function() {
      var itemParams = {
        eventId: $state.params.eventId,
        talkId: $state.params.talkId
      };
      console.log(itemParams);
      Talks.get(itemParams, function(response) {
        $scope.talk = response;
      });
    }

    $scope.changeStatus = function(participant, state) {
      if (!participant.id) {
        throw new Error('participant in undefined');
      };
      if (!state.id) {
        throw new Error('state in undefined');
      };
      var itemParams = {
        eventId: $state.params.eventId,
        talkId: $state.params.talkId,
        userId: participant.id,
        stateId: state.id
      };
      Atts.save(itemParams, function(response) {
        console.log(response);
      });
    }

    $scope.loadParticipants = function() {
      var itemParams = {
        eventId: $state.params.eventId
      };
      Participants.query(itemParams, function(response) {
        console.log(response);
        $scope.participants = response;
      });
    }

    // repeat
    $scope.logout = function() {
      Store.remove('session');
      Global.user = null;
      $state.go('home');
    };
  }
]);
