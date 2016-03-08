(function() {
  'use strict';

  angular
    .module('budgetrentacar.tireRevision')
    .service('TireRevisionFirebaseService', TireRevisionFirebaseService);

  TireRevisionFirebaseService.$inject = ['CarInfoFirebaseService',
                                         'FIREBASE_URL'];

  function TireRevisionFirebaseService(CarInfoFirebaseService,
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
