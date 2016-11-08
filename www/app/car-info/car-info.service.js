(function() {
  'use strict';

  angular
    .module('app.car-info')
    .service('carInfoService', carInfoService);

  /* @ngInject */
  function carInfoService(FIREBASE_URL,
                          $firebaseObject,
                          scannerService) {

    var service = {
      rootRef: new Firebase(FIREBASE_URL),
      fetchCarInfo: fetchCarInfo,
      carInfo: {},
      currentRevisionId: null
    };

    return service;

    function fetchCarInfo() {
      var reference = service.rootRef
        .child('vehicles')
        .child(scannerService.code);
      var carInfoRef = $firebaseObject(reference);
      return carInfoRef.$loaded();
    }

  }

})();
