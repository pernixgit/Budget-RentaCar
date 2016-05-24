(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  /* @ngInject */

  function TireRevisionController(SELECTED_TIRES,
                                  TIRE_BRANDS,
                                  $state,
                                  CarInfoFirebaseService,
                                  LastRevisionService,
                                  RevisionService) {

    var vm = this;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;
    vm.tireBrands = TIRE_BRANDS;
    vm.selectedTires = SELECTED_TIRES;

    function activate() {
      (LastRevisionService.revision) ? setPreviousTires() : setDefaultTires();
    }

    activate();

    function setDefaultTires() {
      vm.selectedTires.rightFrontTireSelectedOption = SELECTED_TIRES[0].rightFrontTireSelectedOption;
      vm.selectedTires.leftFrontTireSelectedOption = SELECTED_TIRES[1].leftFrontTireSelectedOption;
      vm.selectedTires.leftBackTireSelectedOption = SELECTED_TIRES[2].leftBackTireSelectedOption;
      vm.selectedTires.rightBackTireSelectedOption = SELECTED_TIRES[3].rightBackTireSelectedOption;
      vm.selectedTires.extraTireSelectedOption = SELECTED_TIRES[4].extraTireSelectedOption;
    }

    function setPreviousTires() {
      vm.selectedTires.rightFrontTireSelectedOption = LastRevisionService.revision.tires.right_front;
      vm.selectedTires.leftFrontTireSelectedOption = LastRevisionService.revision.tires.left_front;
      vm.selectedTires.leftBackTireSelectedOption = LastRevisionService.revision.tires.left_rear;
      vm.selectedTires.rightBackTireSelectedOption = LastRevisionService.revision.tires.right_rear;
      vm.selectedTires.extraTireSelectedOption = LastRevisionService.revision.tires.spare;
    }

    function goToCarView() {
      RevisionService.setCarTires({
        right_front: vm.selectedTires.rightFrontTireSelectedOption,
        left_front: vm.selectedTires.leftFrontTireSelectedOption,
        right_rear: vm.selectedTires.rightBackTireSelectedOption,
        left_rear: vm.selectedTires.leftBackTireSelectedOption,
        spare: vm.selectedTires.extraTireSelectedOption
      });
      $state.go('carView');
    }
  }
})();
