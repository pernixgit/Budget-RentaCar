(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ['$scope', '$state','$cordovaBarcodeScanner', 'ScannerService', 
    function($scope, $state, $cordovaBarcodeScanner, ScannerService) {
      var scopeCtrl = $scope;
      $cordovaBarcodeScanner.scan().then(function(code_data) {
        ScannerService.setCode(code_data.text);
        $state.go("carInfo")
      }, function(error) {
        alert("Error, no se pudo leer el código");
      });
  }]);
})();
