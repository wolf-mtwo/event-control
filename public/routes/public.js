'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    var path = './public/views/';

    $stateProvider.state('home.contact', {
      url: 'contact',
      templateUrl: path + 'contact/contact.html',
      controller: 'ContactController'
    });

    $stateProvider.state('home.login', {
      url: 'login',
      templateUrl: path + 'session/login.html',
      controller: 'SessionsController'
    });

    $stateProvider.state('home.register', {
      url: 'register',
      templateUrl: path + 'session/register.html',
      controller: 'SessionsController'
    });

    $stateProvider.state('home.forgot', {
      url: 'forgot',
      templateUrl: path + 'session/forgot.html',
      controller: 'SessionsController'
    });
  }
]);
