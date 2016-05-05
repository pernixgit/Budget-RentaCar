(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

  /* @ngInject */

  function CarPartsController(CarPartsService,
                              CarInfoFirebaseService,
                              $state,
                              ACCESORIES,
                              SELECTED_ACCESORIES,
                              FirebaseRevisionService,
                              RevisionService) {

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
      RevisionService.setCarAccesories(vm.accesory);
      resetItems();
      (RevisionService.getRevision().type == 'check-in') ?
        $state.go('feedback') : pushAndEndProcess();
    }

    function pushAndEndProcess() {
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision(), false);
      $state.go('login');
    }

  }
})();
