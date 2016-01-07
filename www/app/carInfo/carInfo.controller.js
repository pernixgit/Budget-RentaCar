(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .controller('carInfoController',['$scope', '$firebaseObject', function( $scope, $firebaseObject ){

    var vm = $scope;
    var FBREFERENCE = new Firebase("https://budget-cr.firebaseio.com/vehicles/12345/");
    vm.carInformation = $firebaseObject(FBREFERENCE);

  }]);
})();