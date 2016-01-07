(function() {
  'use strict';

  angular
    .module('budgetrentacar.form')
    .controller('FormController', ['$scope','$state', 'ScannerService', function($scope,$state, ScannerService){
        var ctrScope = $scope
        var code = ScannerService.getCode()
        alert(code);
    }]);
})();