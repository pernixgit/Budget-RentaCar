(function() {
  'use strict';

  angular
  .module('budgetrentacar.carInfo')
  .controller('CarInfoController', CarInfoController);

  CarInfoController.$inject = ['CarInfoFirebaseService', '$state'];

  function CarInfoController(CarInfoFirebaseService, $state){
    var vm = this;
    vm.goToCarView = goToCarView;
    vm.CarInfoFirebaseService = CarInfoFirebaseService;

    CarInfoFirebaseService.getCarInfo().then(function(){
      CarInfoFirebaseService.carInfo.model ? vm.isLoaded = true : vm.isLoaded = false;
      activate();
      CarInfoFirebaseService.fillNewRevisionData();
    });
    
    function goToCarView() {
      CarInfoFirebaseService.pushNewRevision();
      $state.go('carDeliveryInfo');
    }

    function activate() {
      setTimeout(function() {
        if(!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
    }
  }
})();

