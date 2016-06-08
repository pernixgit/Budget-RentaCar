(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

  /* @ngInject */

  function CarPartsController($state,
                              ACCESORIES,
                              COUNTED_ACCESORIES,
                              SELECTED_ACCESORIES,
                              SELECTED_COUNTED_ACCESORIES,
                              FirebaseRevisionService,
                              RevisionService) {

    var vm = this;
    vm.goToEndOrFeedback = goToEndOrFeedback;

    activate();

    function setDefaultValuesAndOptions() {
      vm.parts = ACCESORIES;
      vm.countedParts = COUNTED_ACCESORIES;
      vm.accesory = SELECTED_ACCESORIES;
      vm.countedAccesory = SELECTED_COUNTED_ACCESORIES;
    }

    function activate() {
      setDefaultValuesAndOptions();
    }

    function resetItems() {
      vm.accesory = SELECTED_ACCESORIES;
    }

    function goToEndOrFeedback() {
      RevisionService.setCarAccesories(vm.accesory, vm.countedAccesory);
      resetItems();
      (RevisionService.getRevision().type == 'check-in') ?
        $state.go('feedback') : pushAndEndProcess();
    }

    function pushAndEndProcess() {
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision(), false);
      RevisionService.resetRevision();
      $state.go('login');
    }

  }
})();
