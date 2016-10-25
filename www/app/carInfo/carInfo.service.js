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
      carInfo: {},
      currentCarId: ScannerService.code,
      currentRevisionId: null
    };

    return service;

    function fetchCarInfo() {
      var reference = service.rootRef
        .child('vehicles')
        .child(currentCarId);
      service.carInfo = $firebaseObject(reference);
      return service.carInfo.$loaded();
    }

  }

})();
