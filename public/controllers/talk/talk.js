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

    $scope.params = $state.params;
    $scope.talk = {};
    $scope.participants = [];
    States.query(function(response) {
      $scope.states = response;
    });

    $scope.loadTalkController = function() {
      $scope.loadTalk();
      $scope.loadParticipants();
    };

    $scope.loadTalk = function() {
      var itemParams = {
        eventId: $state.params.eventId,
        talkId: $state.params.talkId
      };
      Talks.get(itemParams, function(response) {
        $scope.talk = response;
      });
    };

    $scope.loadAttendance = function() {
      Atts.attendance({talkId: $state.params.talkId}, function(response) {
        for (var i = 0; i < response.length; i++) {
          $scope.loadParticipantAttendance(response[i]);
        };
      });
    };

    $scope.changeStatus = function(participant, state) {
      if (!participant.id) {
        throw new Error('participant in undefined');
      };
      if (!state.id) {
        throw new Error('state in undefined');
      };
      if (participant.att) {
        participant.att.stateId = state.id;
        participant.att.$update({talkId: $state.params.talkId}, function(response) {
          console.log(response);
        });
        return;
      }
      var itemParams = {
        eventId: $state.params.eventId,
        participantId: participant.id,
        stateId: state.id
      };
      Atts.save({talkId: $state.params.talkId}, itemParams, function(response) {
        $scope.loadParticipantAttendance(response);
      });
    }

    $scope.loadParticipants = function() {
      var itemParams = {
        eventId: $state.params.eventId
      };
      Participants.query(itemParams, function(response) {
        $scope.participants = response;
        $scope.loadAttendance();
      });
    };

    $scope.loadParticipantAttendance = function(att) {
      for (var i = 0; i < $scope.participants.length; i++) {
        if ($scope.participants[i].id == att.participantId) {
          $scope.participants[i].att = att;
        };
      };
    };

    $scope.getState = function(stateId) {
      var userState = null;
      $scope.states.forEach(function(state) {
        if (state.id == stateId) {
          userState = state.title;
        }
      });
      return userState;
    }

    // repeat
    $scope.logout = function() {
      Store.remove('session');
      Global.user = null;
      $state.go('home');
    };
  }
]);
