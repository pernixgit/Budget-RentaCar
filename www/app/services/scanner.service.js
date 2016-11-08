(function() {
  'use strict';

  angular
    .module('app.services')
    .service('scannerService', scannerService);

  /* @ngInject */
  function scannerService($cordovaBarcodeScanner,
                          $state) {

    var service = {
      code: '',
      scanCode: scanCode
    };

    return service;

    function scanCode() {
      $cordovaBarcodeScanner.scan()
        .then(handleScanSuccess)
        .catch(handleScanError);
    }

    function handleScanSuccess(code) {
      service.code = code.text.toString();
      $state.go('car-info');
    }

    function handleScanError() {
      alert('Error, no se pudo leer el código');
      $state.go('scanner-error');
    }
  }
})();
