(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .service('CarViewService', CarViewService);

    CarViewService.$inject = ['firebase_url_test'];

    function CarViewService(firebase_url_test){
      
      this.firebaseRef = null;

      this.createObservation = function(index){
        firebaseReference.child("observaciones/observacion" + index);
      }
    return this;
    }
})();
