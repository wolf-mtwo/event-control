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
    // resolve:{
    //   init: validateSession
    // }
  });

  $stateProvider.state('events.list', {
    url: '/list',
    templateUrl: path + '/list.html',
    controller: 'DetailController'
  });

  $stateProvider.state('events.create', {
    url: '/create',
    templateUrl: path + '/create.html',
    controller: 'EventCreateController'
  });

  $stateProvider.state('events.detail', {
    url: '/:id',
    templateUrl: path + '/detail.html',
    controller: 'DetailController'
  });

  $stateProvider.state('events.detail.participants', {
    url: '/participants',
    templateUrl: path + '/participants/index.html',
    controller: 'ParticipantsController'
  });

  $stateProvider.state('events.detail.participants.create', {
    url: '/create',
    templateUrl: path + '/participants/create.html',
    controller: 'ParticipantsController'
  });

  $stateProvider.state('events.detail.talks', {
    url: '/talks',
    templateUrl: path + '/talks/list.html',
    controller: 'TalksController'
  });

  $stateProvider.state('events.detail.talks.create', {
    url: '/create',
    templateUrl: path + '/talks/create.html',
    controller: 'TalksController'
  });
}
]);
