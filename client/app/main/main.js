'use strict';

angular.module('eloquaLightApp')
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      template: '<main></main>'
    });
  });
