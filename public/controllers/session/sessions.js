'use strict';

angular.module('seedApp')
.controller('SessionsController', [
  '$scope',
  '$state',
  'Global',
  'Session',
  'User',
  'Store',
  function($scope, $state, Global, Session, User, Store) {

    $scope.login = function(item) {
      Session.login(item, function(response) {
        $scope.changeToSessionMaster(response);
      });
    }

    $scope.register = function(item) {
      User.save(item, function(response) {
        $scope.changeToSessionMaster(response);
      });
    }

    $scope.changeToSessionMaster = function(user) {
      if (!user) {
        throw new Error('user is undefined');
      }
      Store.save('session', user);
      Global.user = user;
      $state.go('events.list');
    }
  }
]);
