(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerCtrl', ScannerCtrl);

  /* @ngInject */
  function ScannerCtrl($state, $cordovaBarcodeScanner, ScannerService) {

    activate();

    function activate() {
      scanCode();
    }

    function scanCode() {
      $cordovaBarcodeScanner.scan()
        .then(handleScanSuccess)
        .catch(handleScanError);
    }

    function handleScanSuccess(code) {
      ScannerService.setCode(code.text);
      $state.go('carInfo');
    }

    function handleScanError() {
      alert('Error, no se pudo leer el código');
      $state.go('scanner-error');
    }

  }
})();
