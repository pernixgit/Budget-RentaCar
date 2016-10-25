(function() {
  'use.strict';

  angular
  .module('app.tire-revision')
  .controller('TireRevisionCtrl', TireRevisionCtrl);

  /* @ngInject */
  function TireRevisionCtrl(SELECTED_TIRES,
                            TIRE_BRANDS,
                            $state,
                            carInfoFirebaseService,
                            lastrevisionService,
                            revisionService) {

    var vm = this;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = carInfoFirebaseService.carInfo.traction_type;
    vm.tireBrands = TIRE_BRANDS;
    vm.selectedTires = SELECTED_TIRES;

    function activate() {
      (lastrevisionService.revision) ? setPreviousTires() : setDefaultTires();
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
      vm.selectedTires.rightFrontTireSelectedOption = lastrevisionService.revision.tires.right_front;
      vm.selectedTires.leftFrontTireSelectedOption = lastrevisionService.revision.tires.left_front;
      vm.selectedTires.leftBackTireSelectedOption = lastrevisionService.revision.tires.left_rear;
      vm.selectedTires.rightBackTireSelectedOption = lastrevisionService.revision.tires.right_rear;
      vm.selectedTires.extraTireSelectedOption = lastrevisionService.revision.tires.spare;
    }

    function goToCarView() {
      revisionService.setCarTires({
        right_front: vm.selectedTires.rightFrontTireSelectedOption,
        left_front: vm.selectedTires.leftFrontTireSelectedOption,
        right_rear: vm.selectedTires.rightBackTireSelectedOption,
        left_rear: vm.selectedTires.leftBackTireSelectedOption,
        spare: vm.selectedTires.extraTireSelectedOption
      });
      $state.go('car-damages');
    }
  }
})();
