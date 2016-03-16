(function() {
  'use strict';

  angular
  .module('budgetrentacar.carParts')
  .service('CarPartsService', CarPartsService);

  CarPartsService.$inject = ['CarInfoFirebaseService',
                             'FIREBASE_URL'];

  function CarPartsService(CarInfoFirebaseService,
                           FIREBASE_URL) {

    var rootRef  = new Firebase(FIREBASE_URL);
    this.pushCarParts = pushCarParts;

    return this;

    function pushCarParts(accesory) {
      var reference = rootRef
        .child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId)
        .child('car_parts_presence');
      reference.update(accesory);
    }

  }
})();
