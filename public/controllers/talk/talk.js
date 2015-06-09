'use strict';

angular.module('seedApp')
.controller('TalkController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Talks',
  function($scope, $state, Global, Store, Talks) {

    $scope.talk = {};

    $scope.loadTalk = function() {
      var itemParams = {
        eventId: $state.params.id,
        talkId: $state.params.talkId
      };
      Talks.get(itemParams, function(response) {
        $scope.talk = response;
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
