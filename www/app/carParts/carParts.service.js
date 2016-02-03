(function() {
  'use strict';

  angular
  .module('budgetrentacar.carParts')
  .service('CarPartsService', CarPartsService);

  CarPartsService.$inject = ['$firebaseObject','CarInfoFirebaseService'];

  function CarPartsService($firebaseObject, CarInfoFirebaseService){
    var rootRef  = new Firebase('https://budgetest.firebaseio.com/');
    this.pushNewItems = pushNewItems;

    return this;

    function pushNewItems(items){
      var reference = rootRef.child('revisions').child(CarInfoFirebaseService.currentRevisionId).child("car-parts");
      reference.set(items);
    }   

  }
})();
