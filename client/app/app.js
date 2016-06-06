'use strict';

angular.module('eloquaLightApp', ['eloquaLightApp.auth', 'eloquaLightApp.admin',
    'eloquaLightApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
