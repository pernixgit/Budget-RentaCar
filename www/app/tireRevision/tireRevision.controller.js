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
      vm.items.rightFrontTireSelectedOption = ITEMS[0].rightFrontTireSelectedOption;
      vm.items.leftFrontTireSelectedOption = ITEMS[1].leftFrontTireSelectedOption;
      vm.items.leftBackTireSelectedOption = ITEMS[2].leftBackTireSelectedOption;
      vm.items.rightBackTireSelectedOption = ITEMS[3].rightBackTireSelectedOption;
      vm.items.extraTireSelectedOption = ITEMS[4].extraTireSelectedOption;
      $scope.$apply();
    }

    function setTireBrand(selectedOption, tireName) {
      var tireArray = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.tires[tireName]));        
      vm.items[selectedOption] = tireArray[0];
    }

    function setPreviousTires(){
      setTireBrand('rightFrontTireSelectedOption', 'rightFrontTire');
      setTireBrand('leftFrontTireSelectedOption', 'leftFrontTire');
      setTireBrand('rightBackTireSelectedOption', 'rightBackTire');
      setTireBrand('leftBackTireSelectedOption', 'leftBackTire');
      setTireBrand('extraTireSelectedOption', 'extraTire');
      $scope.$apply();
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

