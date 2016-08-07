'use strict';

/**
 * @ngdoc overview
 * @name btodWebappApp
 * @description
 * # btodWebappApp
 *
 * Main module of the application.
 */
angular
  .module('btodWebappApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
