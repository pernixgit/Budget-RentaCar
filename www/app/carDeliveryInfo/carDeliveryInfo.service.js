(function() {
  'use strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .service('CarDeliveryInfoFirebaseService', CarDeliveryInfoFirebaseService);

  CarDeliveryInfoFirebaseService.$inject = ['$firebaseObject',
    'CarInfoFirebaseService',
    'FIREBASE_URL'];

  function CarDeliveryInfoFirebaseService($firebaseObject,
                                          CarInfoFirebaseService,
                                          FIREBASE_URL) {
    this.pushNewItems = pushNewItems;
    var rootRef  = new Firebase(FIREBASE_URL);
    return this;

    function pushNewItems(items) {
      var reference = rootRef.child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId);
      reference.update(accesory);
    }
  }
})();
