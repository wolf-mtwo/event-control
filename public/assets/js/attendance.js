angular.module('att', [
  'LocalStorageModule'
]).config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setStorageType('att');
});
angular.module('att')
.controller('AttendanceController', ['$scope', '$http',
  function($scope, $http) {
    $scope.title = "Asistencia";
    $scope.talks = talks;
    $scope.participant = participant;
    $scope.currentEvent = currentEvent;
    $scope.states = states;

    $scope.takeAttendace = function(talk, state) {
      var data = {
        talkId: talk.id,
        eventId: $scope.currentEvent.id,
        stateId: state.id,
        participantId: $scope.participant.id
      }
      $http.post('/api/talk/validate', data).
      success(function(data) {
        talk.att = data;
        talk.att.title = $scope.updateTitle(data);
      }).
      error(function(data) {
        console.error(data);
      });
    }
    $scope.updateTitle = function(currentState) {
      var str = null;
      $scope.states.forEach(function(state) {
        if (state.id == currentState.stateId) {
          str = state.title;
        }
      });
      return str;
    }
  }
]);
