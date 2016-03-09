(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['ITEMS','TIREBRANDS','$state', '$scope',
                                    'CarInfoFirebaseService', 'LastRevisionService',
                                    'TireRevisionFirebaseService'];

  function TireRevisionController(ITEMS, TIREBRANDS, $state, $scope,
                                  CarInfoFirebaseService, LastRevisionService,
                                  TireRevisionFirebaseService) {
    var vm = this;
    vm.TireRevisionFirebaseService = TireRevisionFirebaseService;
    vm.LastRevisionService = LastRevisionService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;
    vm.tireBrands = TIREBRANDS;
    vm.items = ITEMS;
    setDefaultTires = setDefaultTires;
    setTireBrand = setTireBrand;
    setPreviousTires = setPreviousTires;

    function activate() {
      vm.LastRevisionService.fetchData().then(function() {
        if (vm.LastRevisionService.currentCarLastRevision.tires == null) {
          setDefaultTires();
        }
        else {
          setPreviousTires();
        }
      });
    }
    activate();


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
      TireRevisionFirebaseService
        .pushTires(
          {rightFrontTire: vm.items.rightFrontTireSelectedOption.name,
          leftFrontTire: vm.items.leftFrontTireSelectedOption.name,
          rightBackTire: vm.items.rightBackTireSelectedOption.name,
          leftBackTire: vm.items.leftBackTireSelectedOption.name,
          extraTire: vm.items.extraTireSelectedOption.name
          });
      $state.go('carView');
    }
  }
})();

