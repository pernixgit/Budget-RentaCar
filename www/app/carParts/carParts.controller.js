(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

    CarPartsController.$inject = ['CarPartsService',
                                  'CarInfoFirebaseService',
                                  '$state',
                                  'ACCESORIES',
                                  'SELECTED_ACCESORIES'];

  function CarPartsController(CarPartsService,
                              CarInfoFirebaseService,
                              $state,
                              ACCESORIES,
                              SELECTED_ACCESORIES) {

    var vm = this;
    vm.CarPartsService = CarPartsService;
    vm.CarInfoFirebaseService = CarInfoFirebaseService;
    vm.goToEndOrFeedback = goToEndOrFeedback;
    vm.accesories = ACCESORIES;
    vm.accesory = SELECTED_ACCESORIES;

    function resetItems() {
      vm.accesory = SELECTED_ACCESORIES;
    }

    function goToEndOrFeedback() {
      CarPartsService.pushTires(vm.accesory);
      resetItems();
      var currentRevisionType = vm.CarInfoFirebaseService
        .carInfo
        .currentRevisionType;
      if (currentRevisionType == 'check-out') {
        resetItems();
        $state.go('feedback');
      } else {
        resetItems();
        $state.go('login');
      }
    }
  }
})();
