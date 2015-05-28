'use strict';

angular.module('seedApp')
.controller('SessionsController', ['$scope', '$state', 'Roles', 'Users',
  function($scope, $state, Roles, Users) {

    $scope.item = {
      email: 'wolf',
      password: 'wolf'
    };

    $scope.login = function(item) {
      Roles.login(item, function(response) {
        console.log(response);
        $state.go('events');
      });
    }

    $scope.register = function(item) {
      Users.save(item, function(response) {
        console.log(response);
      });
    }

  }
]);
