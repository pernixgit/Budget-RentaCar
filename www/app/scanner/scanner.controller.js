(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ['$scope','$cordovaBarcodeScanner', function($scope, $cordovaBarcodeScanner) {
    var ctrScope = $scope;

    ctrScope.scanBarcode = function() {
      console.log("en scan barcode");
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };

  }]);
})();