'use strict';

angular.module('seedApp')
.controller('ParticipantsController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Participants',
  'Upload',
  function($scope, $state, Global, Store, Participants, Upload) {

    $scope.logs = [];
    $scope.participant = {};

    $scope.loadParticipants = function() {
      var itemParams = {
        eventId: $state.params.id
      };
      Participants.query(itemParams, function(response) {
        $scope.participants = response;
      });
    }

    $scope.loadParticipant = function() {
      var itemParams = {
        eventId: $state.params.id,
        participantId: $state.params.participantId
      };
      Participants.get(itemParams, function(response) {
        $scope.participant = response;
      });
    }

    $scope.create = function(item) {
      var itemParams = {
        eventId: $state.params.id
      };
      Participants.save(itemParams, item, function(response) {
        $scope.participants.push(response);
        $state.go('events.detail.participants');
      });
    }

    $scope.remove = function(item) {
      var itemParams = {
        eventId: $state.params.id,
        id: $state.params.participantId
      };
      item.$remove(itemParams, function(response) {
        $state.go('events.detail.participants');
      });
    }

    $scope.upload = function(files) {
      var count = 0;
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          Upload.upload({
            url: './upload/upload_file',
            file: file
          })
          .progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            var text = count++ + 'progress: ' + progressPercentage + '% ' +
            evt.config.file.name;
            $scope.logs.push(text);
          })
          .success(function (data, status, headers, config) {
            $scope.item.image = data['file_name'];
            $scope.logs.push(count++ + 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
          });
        }
      }
    };
  }
]);
