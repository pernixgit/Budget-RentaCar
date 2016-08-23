(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewCtrl', CarViewCtrl);

  /* @ngInject */

  function CarViewCtrl($scope,
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
