(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .controller('carInfoController',['$scope', '$firebaseObject', 'ScannerService', 
      function( $scope, $firebaseObject, ScannerService){

    var vm = $scope;
    
    var FBREFERENCE = new Firebase("https://budget-cr.firebaseio.com/vehicles/"+ String(ScannerService.getCode()) + "/");
    vm.carInformation = $firebaseObject(FBREFERENCE);
  }]);
})();