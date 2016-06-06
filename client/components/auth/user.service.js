'use strict';

(function() {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('eloquaLightApp.auth')
    .factory('User', UserResource);
})();
