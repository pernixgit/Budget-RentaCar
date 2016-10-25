(function() {
  'use strict';

  angular
    .module('app.car-parts')
    .controller('CarPartsCtrl', CarPartsCtrl);

  /* @ngInject */
  function CarPartsCtrl($state,
                        ACCESORIES,
                        COUNTED_ACCESORIES,
                        SELECTED_ACCESORIES,
                        SELECTED_COUNTED_ACCESORIES,
                        RevisionService,
                        FirebaseRevisionService) {

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
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision(), false, Date.now());
      RevisionService.resetRevision();
      $state.go('login');
    }

  }
})();
