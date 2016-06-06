'use strict';

angular.module('eloquaLightApp.auth', ['eloquaLightApp.constants', 'eloquaLightApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
