(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .controller('carInfoController',['$scope', '$firebaseObject', 'ScannerService', 
      function( $scope, $firebaseObject, ScannerService){

    var vm = $scope;
    var FBREFERENCE = new Firebase("https://budget-cr.firebaseio.com/vehicles/12345/");
    vm.carInformation = $firebaseObject(FBREFERENCE);
    alert(ScannerService.getCode());
  }]);
})();