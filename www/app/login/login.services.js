(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('LoginFirebaseService', LoginFirebaseService);

    LoginFirebaseService.$inject = ['firebase_url'];

    function LoginFirebaseService(firebase_url){
      this.firebaseRef = null;
      this.username = null;
      this.setupFirebaseRef = function(userName){
        return this.firebaseRef = new Firebase(firebase_url + "/users/" + userName);
      }
    return this;
    }
})();
