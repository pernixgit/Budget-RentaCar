(function() {
  'use strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .service('CarDeliveryInfoFirebaseService', CarDeliveryInfoFirebaseService);

  CarDeliveryInfoFirebaseService.$inject = ['CarInfoFirebaseService',
                                            'FIREBASE_URL'];

  function CarDeliveryInfoFirebaseService(CarInfoFirebaseService,
                                          FIREBASE_URL) {
    this.pushCarDeliveryInfo = pushCarDeliveryInfo;
    var rootRef  = new Firebase(FIREBASE_URL);
    return this;

    function pushCarDeliveryInfo(items) {
      var reference = rootRef.child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId);
      reference.update(items);
    }
  }
})();
