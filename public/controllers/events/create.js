'use strict';

angular.module('seedApp')
.controller('EventCreateController', [
  '$scope',
  '$state',
  'Global',
  'Store',
  'Event',
  'Upload',
  function($scope, $state, Global, Store, Event, Upload) {

    $scope.logs = [];
    $scope.item = {
      image: null
    };

    $scope.create = function(item) {
      Event.save(item, function(response) {
        $state.go('events.list');
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
