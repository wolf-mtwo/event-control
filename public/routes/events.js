'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
function($urlRouterProvider, $stateProvider) {

  var path = './public/views/events';
  var validateSession = function($q, $location, Global, Store) {
    var deferred = $q.defer();
    var session = Store.get('session');
    if (!session) {
      deferred.resolve($location.path('/login'));
    } else {
      Global.user = session;
      deferred.resolve($location.path());
    }
    return deferred.promise;
  }

  $stateProvider.state('events', {
    url: '/events',
    templateUrl: path + '/index.html',
    controller: 'EventsController',
    resolve:{
      init: validateSession
    }
  });
}
]);
