(function() {
  'use strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .service('CarDeliveryInfoFirebaseService', CarDeliveryInfoFirebaseService);

    CarDeliveryInfoFirebaseService.$inject = ['$firebaseObject','CarInfoFirebaseService'];
    
    function CarDeliveryInfoFirebaseService($firebaseObject, CarInfoFirebaseService){
      this.pushNewItems = pushNewItems;
      var rootRef  = new Firebase('https://budget-cr.firebaseio.com/');
      return this;

      function pushNewItems(items){
        var reference = rootRef.child('revisions').child(CarInfoFirebaseService.currentRevisionId);
        reference.update(items);
      }   
  }
})();
