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
    controller: 'ContactController'
  });
}
]);
