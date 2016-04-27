(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ScannerController);

  ScannerController.$inject = ['$state',
                               '$cordovaBarcodeScanner',
                               'ScannerService'];

  function ScannerController($state, $cordovaBarcodeScanner, ScannerService) {
    $cordovaBarcodeScanner.scan()
      .then(
        function(codeData) {
          ScannerService.setCode(codeData.text);
          $state.go('carInfo');
        },
        function(error) {
          alert('Error, no se pudo leer el código');
          $state.go('scanner-error');
        });
  }
})();
