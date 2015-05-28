'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    var path = './public/views/events';

    $stateProvider.state('events', {
      url: '/events',
      templateUrl: path + '/index.html',
      controller: 'EventsController'
    });
  }
]);
