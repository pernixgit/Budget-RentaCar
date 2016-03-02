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
    vm.currentCarTraction = '4x2';

    activate();

    function activate() {
      //screen.lockOrientation('portrait');
    }

    function goToExteriorParts() {
      CarViewService.pushCarViewData();
      //$state.go('carParts');
    }

  }
})();
