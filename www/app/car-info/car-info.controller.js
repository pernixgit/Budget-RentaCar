(function() {
  'use strict';

  angular
  .module('app.car-info')
  .controller('CarInfoCtrl', CarInfoCtrl);

  /* @ngInject */
  function CarInfoCtrl($state,
                       $ionicNavBarDelegate,
                       $scope,
                       $q,
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
      $ionicNavBarDelegate.showBar(true);
      $ionicNavBarDelegate.showBackButton(true);
      setTimeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
      if(carInfoService.carInfo.MVA) {
        lastRevisionService.fetchData()
          .then(initRevision)
          .catch(handleFetchDataError);
      }
    }

    function handleFetchDataError(error) {
      if(error == 'newRevision') {
        initRevision();
      } else {
        $state.go('scanner-error');
      }
    }

    function initRevision() {
      revisionService.setNewType(); 
      setContractNumber(); 
      setLoadedToTrue();
    }

    function setLoadedToTrue() {
      vm.isLoaded = true; 
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
