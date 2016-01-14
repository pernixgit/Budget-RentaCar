(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .controller('carInfoController',['$scope', '$firebaseObject', 'ScannerService', 'CarInfoFirebaseService',
      function( $scope, $firebaseObject, ScannerService, CarInfoFirebaseService){
        var vm = this;
        var firebaseReference = CarInfoFirebaseService.setupFirebaseRef(ScannerService.getCode());
        vm.carInformation = $firebaseObject(firebaseReference);
  }]);
})();
