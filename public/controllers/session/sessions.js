'use strict';

angular.module('seedApp')
.controller('SessionsController', ['$scope', '$state', 'Roles',
  function($scope, $state, Roles) {

    $scope.login = function(item) {
      Roles.login(item, function(response) {
        console.log(response);
        $state.go('events');
      });
    }

  }
]);
