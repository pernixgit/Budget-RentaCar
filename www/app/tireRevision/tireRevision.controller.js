(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['ITEMS','TIREBRANDS','$state',
                                    'CarDeliveryInfoFirebaseService',
                                    'CarInfoFirebaseService', 'LastRevisionService'];

  function TireRevisionController(ITEMS, TIREBRANDS, $state,
                                  CarDeliveryInfoFirebaseService,
                                  CarInfoFirebaseService, LastRevisionService) {
    var vm = this;
    vm.LastRevisionService = LastRevisionService;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;
    vm.tireBrands = TIREBRANDS;
    vm.items = ITEMS;

    var car = {type:"Fiat", model:"500", color:"white"};

    function activate(){
      vm.LastRevisionService.fetchData();
      console.log(vm.LastRevisionService.currentCarLastRevision);
      if(vm.LastRevisionService.currentCarLastRevision == null){
        vm.items.rightFrontTireSelectedOption = ITEMS[0].rightFrontTireSelectedOption;
        vm.items.leftFrontTireSelectedOption = ITEMS[1].leftFrontTireSelectedOption;
        vm.items.leftBackTireSelectedOption = ITEMS[2].leftBackTireSelectedOption;
        vm.items.rightBackTireSelectedOption = ITEMS[3].rightBackTireSelectedOption;
        vm.items.extraTireSelectedOption = ITEMS[4].extraTireSelectedOption;
      }
      else{
        console.log("not null");
        /*vm.items.rightFrontTireSelectedOption = ITEMS[0].rightFrontTireSelectedOption;
        vm.items.leftFrontTireSelectedOption = ITEMS[1].leftFrontTireSelectedOption;
        vm.items.leftBackTireSelectedOption = ITEMS[2].leftBackTireSelectedOption;
        vm.items.rightBackTireSelectedOption = ITEMS[3].rightBackTireSelectedOption;
        vm.items.extraTireSelectedOption = ITEMS[4].extraTireSelectedOption;*/
      }
    }
    activate();

    function resetFields() {
     // vm.items = ITEMS;
    }

    function goToCarView() {
      CarDeliveryInfoFirebaseService
        .pushNewItems(
          {rightFrontTire: vm.items.rightFrontTireSelectedOption.name,
            leftFrontTire: vm.items.leftFrontTireSelectedOption.name,
            rightBackTire: vm.items.rightBackTireSelectedOption.name,
            leftBackTire: vm.items.leftBackTireSelectedOption.name,
            extraTire: vm.items.extraTireSelectedOption.name});
      resetFields();
      $state.go('carView');
    }
  }
})();
