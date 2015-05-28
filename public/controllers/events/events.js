'use strict';

angular.module('seedApp')
.controller('EventsController', ['$scope', '$state', 'Global', 'Store',
  function($scope, $state, Global, Store) {
    $scope.logout = function() {
      Store.remove('session');
      Global.user = null;
      $state.go('home');
    };
  }
]);
