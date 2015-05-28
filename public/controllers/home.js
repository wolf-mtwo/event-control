'use strict';

angular.module('seedApp')
.controller('HomeController', ['$scope', 'Global',
  function($scope, Global) {
    console.log(Global);
  }
]);
