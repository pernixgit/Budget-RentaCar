(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController', CarViewController);

  /* @ngInject */

  function CarViewController($scope,
                             $state,
                             CarViewService,
                             CarInfoFirebaseService,
                             RevisionService) {

    var vm = $scope;
    vm.goToExteriorParts = goToExteriorParts;
    vm.CarViewService = CarViewService;
    vm.isEditable = (RevisionService.getRevision().type == 'check-out');
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;

    activate();

    function activate() {
      screen.lockOrientation('portrait');
    }

    function goToExteriorParts() {
      CarViewService.setCanvasComponents();
      $state.go('carParts');
    }
  }
})();
