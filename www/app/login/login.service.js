(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('LoginFirebaseService', LoginFirebaseService);

  /* @ngInject */

  function LoginFirebaseService(FIREBASE_URL,
                                $firebaseObject,
                                RevisionService,
                                SessionService,
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
      var authData = SessionService.getAuthData();
      var sessionDefined = typeof authData !== 'undefined';
      var authDataDefined = authData !== null;
      return sessionDefined && authDataDefined;
    }

    function logOut() {
      SessionService.destroy();
      $state.go('login');
    }

    function verifyAccess(){
      if(isLoggedIn()){
        RevisionService.setUsername(SessionService.getAuthData());
        $state.go('scannerMenu');
      } else{
        $state.go('login');
      }
    }

    function setAuthUser(username){
      SessionService.setAuthData(username);
    }

    function getAuthUser(){
      return SessionService.getAuthData();
    }

  }
    
})();
