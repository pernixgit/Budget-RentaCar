(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['SELECTED_TIRES',
                                    'TIRE_BRANDS',
                                    '$state',
                                    '$scope',
                                    'CarInfoFirebaseService',
                                    'LastRevisionService',
                                    'RevisionService'];

  function TireRevisionController(SELECTED_TIRES,
                                  TIRE_BRANDS,
                                  $state,
                                  $scope,
                                  CarInfoFirebaseService,
                                  LastRevisionService,
                                  RevisionService) {
    var vm = this;
    vm.LastRevisionService = LastRevisionService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;
    vm.tireBrands = TIRE_BRANDS;
    vm.selectedTires = SELECTED_TIRES;
   

    function activate() {
      if(vm.LastRevisionService.revision) {
        setPreviousTires();
      }
      else{
        setDefaultTires();
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

    function setDefaultTires() {
      vm.selectedTires.rightFrontTireSelectedOption = SELECTED_TIRES[0].rightFrontTireSelectedOption;
      vm.selectedTires.leftFrontTireSelectedOption = SELECTED_TIRES[1].leftFrontTireSelectedOption;
      vm.selectedTires.leftBackTireSelectedOption = SELECTED_TIRES[2].leftBackTireSelectedOption;
      vm.selectedTires.rightBackTireSelectedOption = SELECTED_TIRES[3].rightBackTireSelectedOption;
      vm.selectedTires.extraTireSelectedOption = SELECTED_TIRES[4].extraTireSelectedOption;
    }

    function setPreviousTires(){
      vm.selectedTires.rightFrontTireSelectedOption = compareTires(vm.LastRevisionService.revision.tires.right_front);
      vm.selectedTires.leftFrontTireSelectedOption = compareTires(vm.LastRevisionService.revision.tires.left_front);
      vm.selectedTires.leftBackTireSelectedOption = compareTires(vm.LastRevisionService.revision.tires.left_rear);
      vm.selectedTires.rightBackTireSelectedOption = compareTires(vm.LastRevisionService.revision.tires.right_rear);
      vm.selectedTires.extraTireSelectedOption = compareTires(vm.LastRevisionService.revision.tires.spare);
    }
 
    function goToCarView() {
      RevisionService.setCarTires({
        right_front: vm.selectedTires.rightFrontTireSelectedOption.name,
        left_front: vm.selectedTires.leftFrontTireSelectedOption.name,
        right_rear: vm.selectedTires.rightBackTireSelectedOption.name,
        left_rear: vm.selectedTires.leftBackTireSelectedOption.name,
        spare: vm.selectedTires.extraTireSelectedOption.name
      });
      $state.go('carView');
    }
  }
})();
