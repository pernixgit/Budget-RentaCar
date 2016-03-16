(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .service('CarInfoFirebaseService', CarInfoFirebaseService);

  CarInfoFirebaseService.$inject = ['FIREBASE_URL',
                                    '$firebaseObject',
                                    'ScannerService'];

  function CarInfoFirebaseService(FIREBASE_URL,
                                  $firebaseObject,
                                  ScannerService) {

    var service = {
      rootRef: new Firebase(FIREBASE_URL),
      fetchCarInfo: fetchCarInfo,
      pushNewRevision: pushNewRevision,
      carInfo: null,
      currentCarId: ScannerService.getCode(),
      currentRevisionId: null,
      newRevision: {}
    };
    return service;

    function fetchCarInfo() {
      var reference = service.rootRef
        .child('vehicles')
        .child(ScannerService.getCode());
      service.carInfo = $firebaseObject(reference);
      return service.carInfo.$loaded();
    }

    function updateVehicleCurrentRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(service.currentCarId);
      reference.update({last_revision_ref: service.currentRevisionId});
    }

    function pushNewRevision() {
      var reference = service.rootRef
        .child('revisions');
      var pushRef = reference.push(service.newRevision);
      saveCreatedRevisionId(pushRef.key());
    }

    function saveCreatedRevisionId(id) {
      service.currentRevisionId = id;
      updateVehicleCurrentRevisionRef();
    }
  }

})();
