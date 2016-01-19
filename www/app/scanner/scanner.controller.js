(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ScannerController);

  ScannerController.$inject = ['$state','$cordovaBarcodeScanner', 'ScannerService'];

    function ScannerController($state, $cordovaBarcodeScanner, ScannerService) {
      console.log("en ScannerController");
      $cordovaBarcodeScanner
      .scan()
        .then(
          function(code_data) {
            ScannerService.setCode(code_data.text);
            $state.go("carInfo");
        }, 
          function(error) {
            alert("Error, no se pudo leer el código");
        });
    };
})();
