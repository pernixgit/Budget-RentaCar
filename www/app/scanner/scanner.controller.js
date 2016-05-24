(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ScannerController);

  /* @ngInject */

  function ScannerController($state, $cordovaBarcodeScanner, ScannerService) {

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
