(function() {
  'use strict';

  angular
    .module('app.login')
    .service('loginService', loginService);

  /* @ngInject */
  function loginService(FIREBASE_URL,
                        revisionService,
                        sessionService,
                        $firebaseObject,
                        $rootScope,
                        $location,
                        $state) {
    var service = {
      isLoggedIn: isLoggedIn,
      logIn: logIn,
      logOut: logOut,
      verifyAccess: verifyAccess,
      setAuthUser: setAuthUser,
      getAuthUser: getAuthUser
    };

    return service;

    function logIn(username) {
      var reference = new Firebase(FIREBASE_URL);
      return $firebaseObject(reference.child('users').child(username)).$loaded();
    }

    function isLoggedIn() {
      var authData = sessionService.getAuthData();
      var sessionDefined = typeof authData !== 'undefined';
      var authDataDefined = authData !== null;
      return sessionDefined && authDataDefined;
    }

    function logOut() {
      sessionService.destroy();
      $state.go('login');
    }

    function verifyAccess() {
      if(isLoggedIn()) {
        revisionService.setUsername(sessionService.getAuthData());
        $state.go('scanner-menu');
      } else{
        $state.go('login');
      }
    }

    function setAuthUser(username) {
      sessionService.setAuthData(username);
    }

    function getAuthUser() {
      return sessionService.getAuthData();
    }

  }
    
})();
