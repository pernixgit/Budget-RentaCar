(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ScannerController);

  ScannerController.$inject = ['$state','$cordovaBarcodeScanner', 'ScannerService'];

    function ScannerController($state, $cordovaBarcodeScanner, ScannerService) {
      $cordovaBarcodeScanner
      .scan()
        .then(
          function(code_data) {
            ScannerService.setCode(code_data.text);
            console.log("Codigo en GetCode() " + ScannerService.getCode());
            $state.go("carInfo");
        }, 
          function(error) {
            alert("Error, no se pudo leer el código");
        });
    };
})();
