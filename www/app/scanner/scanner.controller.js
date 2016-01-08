(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner')
  .controller('ScannerController', ['$scope', '$state','$cordovaBarcodeScanner', function($scope, $state, $cordovaBarcodeScanner) {
      var scopeCtrl = $scope;
      $cordovaBarcodeScanner.scan().then(function(code_data) {
        alert(code_data.text);
        //ScannerService.setCode(code_data);
        $state.go("carInfo")
      }, function(error) {
        alert("Error, no se pudo leer el código");
      });
  }])
  /**
  .service('ScannerService', function(ScannerService){
    var data = {
      code: ""
    };

    return{
       getCode: function () {
            return data.code;
        },
        setCode: function (code) {
            data.code = code;
        }
    };
  });**/
})();
