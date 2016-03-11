(function() {
  'use strict';

  angular
  .module('budgetrentacar.carInfo')
  .controller('CarInfoController', CarInfoController);

  CarInfoController.$inject = ['CarInfoFirebaseService', '$state', 'RevisionService', 'LastRevisionService'];

  function CarInfoController(CarInfoFirebaseService, $state, RevisionService, LastRevisionService) {
    var vm = this;
    vm.goToCarView = goToCarView;
    vm.CarInfoFirebaseService = CarInfoFirebaseService;

    activate();

    CarInfoFirebaseService.fetchCarInfo().then(function() {
      LastRevisionService.fetchData().then(function() {
        CarInfoFirebaseService.carInfo.model ? vm.isLoaded = true : vm.isLoaded = false;
        CarInfoFirebaseService.fillNewRevisionData();
      });
    });

    function goToCarView() {
      CarInfoFirebaseService.pushNewRevision();
      RevisionService.setCarMVA(CarInfoFirebaseService.carInfo.MVA);
      RevisionService.setNewType(LastRevisionService.currentCarLastRevision.revisionType);
      console.log(RevisionService.getRevision());
      $state.go('carDeliveryInfo');
    }


    function activate() {
      setTimeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
    }
  }
})();

