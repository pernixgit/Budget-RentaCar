(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('LoginFirebaseService', LoginFirebaseService);

  /* @ngInject */

  function LoginFirebaseService(FIREBASE_URL,
                                $firebaseObject,
                                SessionService,
                                $rootScope,
                                $location,
                                $state) {

    var rootRef = firebase.database().ref();
    var service = {
      isLoggedIn: isLoggedIn,
      logIn: logIn,
      logOut: logOut,
      verifyAccess: verifyAccess,
      setAuthUser: setAuthUser
    };

    return service;

    function logIn(username) {
      return $firebaseObject(rootRef.child('users').child(username)).$loaded();
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
        $state.go('scannerMenu');
      } else{
        $state.go('login');
      }
    }

    function setAuthUser(username){
      SessionService.setAuthData(username);
    }
  }
    
})();
