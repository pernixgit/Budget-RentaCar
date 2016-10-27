(function() {
  'use strict';

  angular
      .module('app.services')
      .factory('sessionService', sessionService);

  /* @ngInject */
  function sessionService($window) {

    var service = {
      destroy: destroy,
      getAuthData: getAuthData,
      setAuthData: setAuthData
    };

    return service;

    function destroy() {
      service.setAuthData(null);
    }

    function getAuthData() {
      var session = $window.localStorage.getItem('session');
      if(session) {
        return JSON.parse(session).authData;
      }
    }

    function setAuthData(authData) {
      var session = JSON.stringify({authData: authData});
      $window.localStorage.setItem('session', session);
    }
  }

})();
