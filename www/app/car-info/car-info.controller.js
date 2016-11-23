(function() {
  'use strict';

  angular
  .module('app.car-info')
  .controller('CarInfoCtrl', CarInfoCtrl);

  /* @ngInject */
  function CarInfoCtrl($state,
                       $ionicNavBarDelegate,
                       $scope,
                       $timeout,
                       revisionService,
                       carInfoService,
                       lastRevisionService) {

    var vm = this;
    vm.isLoaded = false;

    vm.goToCarView = goToCarView;
    vm.carInfoService = carInfoService;
    vm.getRevisionType = revisionService.getType;
    vm.goBack = goBack;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(false);
      startTimeOut();
      if(carInfoService.carInfo.MVA) {
        lastRevisionService.fetchData()
          .then(initRevision)
          .catch(handleFetchDataError);
      }

    }

    function goBack() {
      $state.go('scanner-menu');
    }


    function startRevision() {
      startTimeOut();
      if(carInfoService.carInfo.MVA) {
        lastRevisionService.fetchData()
          .then(initRevision)
          .catch(handleFetchDataError);
      }
    }

    function startTimeOut() {
      $timeout(function() {
        if (!vm.isLoaded) {
          $state.go('scanner-error');
        }
      }, 7000);
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
      if (revisionService.getType() == 'check-out') {
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
