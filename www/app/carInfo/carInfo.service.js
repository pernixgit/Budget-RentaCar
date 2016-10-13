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

    var rootRef = firebase.database().ref();
    var service = {
      fetchCarInfo: fetchCarInfo,
      carInfo: {},
      currentCarId: ScannerService.getCode(),
      currentRevisionId: null
    };

    return service;

    function fetchCarInfo() {
      var reference = rootRef
        .child('vehicles')
        .child(ScannerService.getCode());
      service.carInfo = $firebaseObject(reference);
      return service.carInfo.$loaded();
    }

  }

})();
