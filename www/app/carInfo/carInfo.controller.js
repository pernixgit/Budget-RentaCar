(function() {
  'use strict';

  angular
  .module('budgetrentacar.carInfo')
  .controller('CarInfoController', CarInfoController);

  /* @ngInject */

  function CarInfoController(CarInfoFirebaseService,
                             $state,
                             RevisionService,
                             LastRevisionService,
                             $ionicNavBarDelegate) {
    var vm = this;
    vm.goToCarView = goToCarView;
    vm.RevisionService = RevisionService;
    vm.CarInfoFirebaseService = CarInfoFirebaseService;

    activate();

    function setContractNumber(lastRevision) {
      if (lastRevision.contract_number) {
        RevisionService.setContractNumber(lastRevision.contract_number);
      }
    }

    function setNewRevisionType() {
      var lastRevision = LastRevisionService.revision;
      if (lastRevision) {
        RevisionService.setNewType(lastRevision.type);
        if (angular.equals(RevisionService.getRevision().type, 'check-in')) {
          setContractNumber(lastRevision);
        }
      } else {
        RevisionService.setNewType('check-in');
      }
    }

    function goToCarView() {
      RevisionService.setLicensePlate(CarInfoFirebaseService.carInfo.license_plate);
      RevisionService.setCarMVA(CarInfoFirebaseService.carInfo.MVA);
      $state.go('carDeliveryInfo');
    }

    function activate() {
      $ionicNavBarDelegate.showBackButton(false);
      setNewRevisionType();
      vm.isLoaded = (CarInfoFirebaseService.carInfo.model) ? true : false;
      setTimeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
    }
  }
})();
