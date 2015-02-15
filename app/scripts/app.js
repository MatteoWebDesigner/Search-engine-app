'use strict';

/**
 * @ngdoc overview
 * @name searchEngineAppApp
 * @description
 * # searchEngineAppApp
 *
 * Main module of the application.
 */
angular
  .module('searchEngineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
