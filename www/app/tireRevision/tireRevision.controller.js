(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['SELECTED_TIRES',
                                    'TIRE_BRANDS',
                                    '$state',
                                    'CarDeliveryInfoFirebaseService',
                                    'CarInfoFirebaseService',
                                    'LastRevisionService',
                                    'RevisionService'];

  function TireRevisionController(SELECTED_TIRES,
                                  TIRE_BRANDS,
                                  $state,
                                  CarDeliveryInfoFirebaseService,
                                  CarInfoFirebaseService,
                                  LastRevisionService,
                                  RevisionService) {
    var vm = this;
    vm.LastRevisionService = LastRevisionService;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;
    vm.tireBrands = TIRE_BRANDS;
    vm.selectedTires = SELECTED_TIRES;

    function activate() {

      var revision = vm.LastRevisionService.revision;
      if(revision) {
        vm.selectedTires.rightFrontTireSelectedOption = compareTires(revision.tires.right_front);
        vm.selectedTires.leftFrontTireSelectedOption = compareTires(revision.tires.left_front);
        vm.selectedTires.leftBackTireSelectedOption = compareTires(revision.tires.left_rear);
        vm.selectedTires.rightBackTireSelectedOption = compareTires(revision.tires.right_rear);
        vm.selectedTires.extraTireSelectedOption = compareTires(revision.tires.spare);
      }else{
        vm.selectedTires.rightFrontTireSelectedOption = SELECTED_TIRES[0].rightFrontTireSelectedOption;
        vm.selectedTires.leftFrontTireSelectedOption = SELECTED_TIRES[1].leftFrontTireSelectedOption;
        vm.selectedTires.leftBackTireSelectedOption = SELECTED_TIRES[2].leftBackTireSelectedOption;
        vm.selectedTires.rightBackTireSelectedOption = SELECTED_TIRES[3].rightBackTireSelectedOption;
        vm.selectedTires.extraTireSelectedOption = SELECTED_TIRES[4].extraTireSelectedOption;
      }
    }
    activate();

    function compareTires(tireName) {
      for(var position = 0; position < vm.tireBrands.length; position++) {
        if (tireName === vm.tireBrands[position].name){
          return vm.tireBrands[position];
        }
      }
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
