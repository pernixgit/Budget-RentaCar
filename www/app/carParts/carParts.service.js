(function() {
  'use strict';

  angular
  .module('budgetrentacar.carParts')
  .service('CarPartsService', CarPartsService);

  CarPartsService.$inject = ['$firebaseObject',
    'CarInfoFirebaseService',
    'FIREBASE_URL'];

  function CarPartsService($firebaseObject,
                           CarInfoFirebaseService,
                           FIREBASE_URL) {
    var rootRef  = new Firebase(FIREBASE_URL);
    this.pushNewItems = pushNewItems;

    return this;

    function pushNewItems(items) {
      var reference = rootRef
        .child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId)
        .child('car-parts');
      reference.update(items);
    }
  }
})();
