(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerCtrl', ScannerCtrl);

  /* @ngInject */

  function ScannerCtrl($state, $cordovaBarcodeScanner, ScannerService) {

    $cordovaBarcodeScanner.scan()
      .then(
        function(code) {
          ScannerService.setCode(code.text);
          $state.go('carInfo');
        },
        function(error) {
          alert('Error, no se pudo leer el código');
          $state.go('scanner-error');
        });
  }
})();
