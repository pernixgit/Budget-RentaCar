(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['ITEMS','TIREBRANDS','$state',
                                    'CarDeliveryInfoFirebaseService',
                                    'CarInfoFirebaseService', 'LastRevisionService', 'TireRevisionFirebaseService'];

  function TireRevisionController(ITEMS, TIREBRANDS, $state,
                                  CarDeliveryInfoFirebaseService,
                                  CarInfoFirebaseService, LastRevisionService,
                                  TireRevisionFirebaseService) {
    var vm = this;
    vm.TireRevisionFirebaseService = TireRevisionFirebaseService;
    vm.LastRevisionService = LastRevisionService;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;
    vm.tireBrands = TIREBRANDS;
    vm.items = ITEMS;

    function activate(){
      vm.LastRevisionService.fetchData().then(function() {
      if(vm.LastRevisionService.currentCarLastRevision.leftFrontTire == undefined){
        vm.items.rightFrontTireSelectedOption = ITEMS[0].rightFrontTireSelectedOption;
        vm.items.leftFrontTireSelectedOption = ITEMS[1].leftFrontTireSelectedOption;
        vm.items.leftBackTireSelectedOption = ITEMS[2].leftBackTireSelectedOption;
        vm.items.rightBackTireSelectedOption = ITEMS[3].rightBackTireSelectedOption;
        vm.items.extraTireSelectedOption = ITEMS[4].extraTireSelectedOption;
      }
      else{
        var tire;
        tire = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.rightFrontTire));
        vm.items.rightFrontTireSelectedOption = tire[0];
        tire = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.leftBackTire));
        vm.items.leftBackTireSelectedOption = tire[0];
        tire = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.rightBackTire));
        vm.items.rightBackTireSelectedOption = tire[0];
        tire = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.leftFrontTire));
        vm.items.leftFrontTireSelectedOption = tire[0];
        tire = vm.tireBrands.filter(vm.TireRevisionFirebaseService.findTire(vm.LastRevisionService.currentCarLastRevision.extraTire));
        vm.items.extraTireSelectedOption = tire[0];
        }
    });
  }
  activate();

    function goToCarView() {
      CarDeliveryInfoFirebaseService
        .pushNewItems(
          {rightFrontTire: vm.items.rightFrontTireSelectedOption.name,
            leftFrontTire: vm.items.leftFrontTireSelectedOption.name,
            rightBackTire: vm.items.rightBackTireSelectedOption.name,
            leftBackTire: vm.items.leftBackTireSelectedOption.name,
            extraTire: vm.items.extraTireSelectedOption.name});
      $state.go('carView');
    }
  }
})();
