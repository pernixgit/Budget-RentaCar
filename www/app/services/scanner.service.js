(function() {
  'use strict';

  angular
    .module('budgetrentacar.services')
    .service('ScannerService', ScannerService);

  /* @ngInject */
  function ScannerService($cordovaBarcodeScanner,
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
      $state.go('carInfo');
    }

    function handleScanError() {
      alert('Error, no se pudo leer el código');
      $state.go('scanner-error');
    }
  }
})();
