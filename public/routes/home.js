'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    var validateSession = function($q, Store, $location) {
      var deferred = $q.defer();
      var session = Store.get('session');
      if (session) {
        deferred.resolve($location.path('/events'));
      } else {
        deferred.resolve($location.path());
      }
      return deferred.promise;
    }

    $stateProvider.state('home', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'HomeController',
      resolve: {
        init: validateSession
      }
    });

    $urlRouterProvider.otherwise('/');
  }
]);
