(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .controller('CarInfoController', CarInfoController);
      
    CarInfoController.$inject = ['ScannerService', 'carInfoService', '$state'];
      
    function CarInfoController(ScannerService, carInfoService, $state){
      var vm = this;
      vm.carInformation = {};
      vm.isLoaded = false;

      vm.goToCarView = goToCarView;
      activate();

      function activate() {
        setTimeout(function() {
          if(!vm.isLoaded) {
            $state.go('scanner-error');
          }
        }, 5000);

        carInfoService.getVehicle(ScannerService.getCode())
          .$loaded()
            .then(function(data) {
              vm.carInformation = data;
              if(isValid()){
                vm.isLoaded = true;
                vm.carInformation = data;
              }else{
                $state.go('scanner-error');
              }
            })
            .catch(function(error) {
              console.error("Error:", error);
            });
        }

      function isValid() {
        return vm.carInformation.MVA;
      }

      function goToCarView() {
        $state.go('carView');
      }
    }
})();
