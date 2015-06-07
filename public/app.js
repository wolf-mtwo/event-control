'use strict';

angular.module('seedApp', [
  'ngRoute',
  'ui.router',
  'ngResource',
  'ngFileUpload',
  'LocalStorageModule'
]).config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('events');
  localStorageServiceProvider.setStorageType('sessionStorage');
});;
