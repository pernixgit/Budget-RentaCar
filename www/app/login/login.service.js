(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('LoginFirebaseService', LoginFirebaseService);

  LoginFirebaseService.$inject = ['FIREBASE_URL'];

  function LoginFirebaseService(FIREBASE_URL) {
    this.firebaseRef = null;
    this.username = null;
    this.setupFirebaseRef = function(userName) {
      return this.firebaseRef =
        new Firebase(FIREBASE_URL + '/users/' + userName);
    };
    return this;
  }
})();
