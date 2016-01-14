(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('loginFirebaseService', function(){
      this.firebaseRef = null;
      this.setupFirebaseRef = function(userName){
        return this.firebaseRef = new Firebase("https://budget-cr.firebaseio.com/users/" + userName);
      }
    return this;
  });
})();
