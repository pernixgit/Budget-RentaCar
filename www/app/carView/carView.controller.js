(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController', CarViewController);

  CarViewController.$inject = ['$scope',
                               '$state',
                               'CarViewService',
                               'CarInfoFirebaseService'];

  function CarViewController($scope,
                             $state,
                             CarViewService,
                             CarInfoFirebaseService) {
    var vm = $scope;
    vm.goToExteriorParts = goToExteriorParts;
    vm.CarViewService = CarViewService;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;

    activate();

    function activate() {
      //screen.lockOrientation('portrait');
    }

    function goToExteriorParts() {
      CarViewService.setCanvasComponents();
      $state.go('carParts');
    }
  }
})();
