(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .service('CarInfoFirebaseService', function(){
      this.firebaseRef = null;
      this.setupFirebaseRef = function(code){
        return this.firebaseRef = new Firebase("https://budget-cr.firebaseio.com/vehicles/" + code);
      }
    return this;
  });
})();
