(function() {
  'use strict';

  angular
  .module('app.car-info')
  .controller('CarInfoCtrl', CarInfoCtrl);

  /* @ngInject */
  function CarInfoCtrl($state,
                       $ionicNavBarDelegate,
                       $scope,
                       revisionService,
                       carInfoService,
                       lastRevisionService) {

    var vm = this;
    vm.isLoaded = false;

    vm.goToCarView = goToCarView;
    vm.carInfoService = carInfoService;
    vm.getRevisionType = revisionService.getType;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(true);
      setTimeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
      if(carInfoService.carInfo.MVA) {
        lastRevisionService.fetchData()
          .then(revisionService.setNewType)
          .then(setContractNumber)
          .then(function() { vm.isLoaded = true; })
          .catch(function() { $state.go('scanner-error') });
      }
    }

    function setContractNumber() {
      if (revisionService.getType() == 'check-in') {
        revisionService.setContractNumber(' ');
      }
    }

    function goToCarView() {
      revisionService.setLicensePlate(carInfoService.carInfo.license_plate);
      revisionService.setCarMVA(carInfoService.carInfo.MVA);
      $state.go('car-delivery');
    }

  }
})();
