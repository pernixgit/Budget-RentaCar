(function() {
  'use strict';

  angular
    .module('budgetrentacar.extraParts')
    .service('ExtraPartsService', ExtraPartsService);

  ExtraPartsService.$inject = ['$firebaseObject',
                               'CarInfoFirebaseService',
                               'FIREBASE_URL'];

  function ExtraPartsService($firebaseObject,
                             CarInfoFirebaseService,
                             FIREBASE_URL) {
    this.pushNewItems = pushNewItems;
    var rootRef  = new Firebase(FIREBASE_URL);

    return this;

    function pushNewItems(items) {
        var reference = rootRef.child('revisions')
          .child(CarInfoFirebaseService.currentRevisionId)
          .child('additional-products');
        reference.update(items);
      }
  }
})();
