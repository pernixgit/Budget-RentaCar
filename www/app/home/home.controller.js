(function() {
  'use strict';
 
  angular
    .module('budgetrentacar.home')
    .controller('HomeController', ['$scope', '$state', function($scope, $state){
      var scopeCtrl = $scope;

      scopeCtrl.openScanner = function(){
        $state.go("scanner");
      }
    }])
  
})(); 