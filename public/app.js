'use strict';

angular.module('seedApp', [
  'ngResource',
  'ngRoute',
  'ui.router',
  'LocalStorageModule'
]).config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('events');
  localStorageServiceProvider.setStorageType('sessionStorage');
});;
