(function() {
  'use strict';

  angular
    .module('budgetrentacar.tireRevision')
    .service('TireRevisionFirebaseService', TireRevisionFirebaseService);

  TireRevisionFirebaseService.$inject = ['CarInfoFirebaseService',
                                         'FIREBASE_URL'];

  function TireRevisionFirebaseService(CarInfoFirebaseService,
                                       FIREBASE_URL) {

    this.pushTires = pushTires;
    var rootRef  = new Firebase(FIREBASE_URL);
    return this;

    function pushTires(tires) {
      var reference = rootRef.child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId)
        .child('tires');
      reference.update(tires);
    }
  }
})();
