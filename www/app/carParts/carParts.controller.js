(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

  CarPartsController.$inject = ['CarPartsService',
                                'CarInfoFirebaseService',
                                '$state',
                                'ACCESORIES',
                                'SELECTED_ACCESORIES',
                                'FirebaseRevisionService',
                                'RevisionService'];

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
      RevisionService.setTimestamp();
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision());
      if (RevisionService.getDamages()) {
        FirebaseRevisionService.pushDamages(RevisionService.getDamages());
      }
      if (RevisionService.getObservations()) {
        FirebaseRevisionService.pushObservations(
          RevisionService.getObservations());
      }
      RevisionService.resetRevision();
      $state.go('login');
    }

  }
})();
