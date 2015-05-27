'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('home', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
