'use strict';

angular.module('seedApp')
.controller('ReportsController', [
  '$scope',
  '$state',
  'Global',
  'Reports',
  'Talks',
  'States',
  function($scope, $state, Global, Reports, Talks, States) {
    $scope.talks = [];
    $scope.participants = [];
    var reportParams = {
      eventId: $state.params.id,
      talkId: $state.params.talkId
    };
    var itemParams = {
      eventId: $state.params.id
    };

    States.query(function(response) {
      $scope.states = response;
    });

    Talks.query(itemParams, function(response) {
      $scope.talks = response;
    });
    Reports.attendance(reportParams, function(response){
      $scope.participants = response;
    });

    $scope.buildAtts = function(participant) {
      var att = [];
      $scope.talks.forEach(function(talk) {
        att.push($scope.validateAtt(participant, talk));
      });
      return att;
    }

    $scope.count = function(participant) {
      var count = 0;
      $scope.talks.forEach(function(talk) {
        var value = $scope.validateAtt(participant, talk);
        if (value) {
          count++;
        }
      });
      return count;
    }


    $scope.validateAtt = function(participant, talk) {
      var result = null;
      participant.atts.forEach(function(att) {
        if (att.talkId == talk.id) {
          result = att.stateId;
        }
      });
      return result;
    }

    // TODO: copy from taks controller
    $scope.getState = function(stateId) {
      var userState = null;
      $scope.states.forEach(function(state) {
        if (state.id == stateId) {
          userState = state.title;
        }
      });
      return userState;
    }
  }
]);
