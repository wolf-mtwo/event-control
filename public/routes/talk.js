'use strict';

angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
function($urlRouterProvider, $stateProvider) {

  var path = './public/views/talk';

  $stateProvider.state('talk', {
    url: '/event/:eventId/talk',
    templateUrl: path + '/index.html',
    controller: 'TalkController'
  });

  $stateProvider.state('talk.detail', {
    url: '/:talkId',
    templateUrl: path + '/detail.html'
  });

  $stateProvider.state('talk.detail.attendace', {
    url: '/attendace',
    templateUrl: path + '/attendace.html'
  });

  $stateProvider.state('talk.detail.list', {
    url: '/list',
    templateUrl: path + '/list.html'
  });
}
]);
