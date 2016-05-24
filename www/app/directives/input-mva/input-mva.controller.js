(function() {
  'use strict';

  angular
    .module('budgetrentacar')
    .controller('InputMVAController', InputMVAController);

  /* @ngInject */

  function InputMVAController($state, $ionicPopup, $scope, ScannerService) {
    var vm = this;
    vm.showMVAInputPopUp = showMVAInputPopUp;

    function showMVAInputPopUp() {
      $scope.data = {};
      $ionicPopup.show({
        template: '<input type="text" ng-model="data.mvaNumber">',
        title: 'Ingrese el MVA del vehículo',
        scope: $scope,
        buttons: [
          {text: 'Cancelar'},
          {text: '<b>Aceptar</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.mvaNumber) {
                e.preventDefault();
              } else {
                ScannerService.setCode($scope.data.mvaNumber);
                $state.go('carInfo');
              }
            }
          }
        ]
      });
    }
  }
})();
