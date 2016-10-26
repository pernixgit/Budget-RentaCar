(function() {
  'use strict';

  angular
    .module('app.car-damages')
    .controller('CarDamagesCtrl', CarDamagesCtrl);

  /* @ngInject */
  function CarDamagesCtrl($scope,
                          $state,
                          carDamagesService,
                          carInfoService,
                          revisionService) {

    var vm = $scope;
    vm.goToExteriorParts = goToExteriorParts;
    vm.carDamagesService = carDamagesService;
    vm.isEditable = (revisionService.getRevision().type == 'check-out');
    vm.currentCarTraction = carInfoService.carInfo.traction_type;

    function goToExteriorParts() {
      carDamagesService.setCanvasComponents();
      $state.go('car-parts');
    }
    
  }

})();
