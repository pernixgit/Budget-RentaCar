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
                        revisionService,
                        firebaseRevisionService) {

    var vm = this;
    vm.uploadCarParts = uploadCarParts;

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

    function uploadCarParts() {
      revisionService.setCarAccesories(vm.accesory, vm.countedAccesory);
      pushAndEndProcess();
      resetItems();
    }

    function pushAndEndProcess() {
      if(revisionService.getType() == 'check-out') {
        revisionService.changeToOldDamages();
      }
      firebaseRevisionService.pushNewRevision(revisionService.getRevision(), Date.now());
      revisionService.resetRevision();
      $state.go('scanner-menu');
    }

  }
})();
