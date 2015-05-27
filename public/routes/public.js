'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    var path = './public/views/contact';

    $stateProvider.state('home.contact', {
      url: 'contact',
      templateUrl: path + '/contact.html',
      controller: 'ContactController'
    });
    $stateProvider.state('home.about', {
      url: 'about',
      templateUrl: path + '/about.html',
      controller: 'ContactController'
    });
  }
]);
