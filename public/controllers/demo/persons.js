'use strict';

angular.module('seedApp')
.controller('PersonsController', ['$scope', 'Persons',
  function($scope, Persons) {

    // constants
    $scope.persons = [];


    // Loads all created persons
    $scope.loadPersons = function() {
      Persons.query({}, function(response) {
        $scope.persons = response;
      });
    }

    // create a new person on database
    $scope.save = function(item) {
      Persons.save(item, function(response) {
        $scope.persons.push(response);
      });
    }

    // Removes a persons
    $scope.remove = function (person, index) {
      person.$delete({id: person.id}, function(response) {
        $scope.persons.splice(index, 1);
      });
    }
  }
]);
