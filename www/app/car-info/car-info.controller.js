(function() {
  'use strict';

  angular
  .module('app.car-info')
  .controller('CarInfoCtrl', CarInfoCtrl);

  /* @ngInject */
  function CarInfoCtrl($state,
                       $ionicNavBarDelegate,
                       revisionService,
                       carInfoService,
                       lastRevisionService) {

    var vm = this;
    vm.goToCarView = goToCarView;
    vm.revisionService = revisionService;
    vm.carInfoService = carInfoService;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(true);
      setNewRevisionType();
      vm.isLoaded = (carInfoService.carInfo.model) ? true : false;
      setTimeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
    }

    function setContractNumber(lastRevision) {
      if (lastRevision.contract_number) {
        revisionService.setContractNumber(lastRevision.contract_number);
      }
    }

    function setNewRevisionType() {
      var lastRevision = lastRevisionService.revision;
      if (lastRevision) {
        revisionService.setNewType(lastRevision.type);
        if (angular.equals(revisionService.getRevision().type, 'check-in')) {
          setContractNumber(lastRevision);
        }
      } else {
        revisionService.setNewType('check-in');
      }
    }

    function goToCarView() {
      revisionService.setLicensePlate(carInfoService.carInfo.license_plate);
      revisionService.setCarMVA(carInfoService.carInfo.MVA);
      $state.go('car-delivery');
    }

  }
})();
