(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['ITEMS','TIREBRANDS','$state',
                                    'CarDeliveryInfoFirebaseService',
                                    'CarInfoFirebaseService'];

  function TireRevisionController(ITEMS, TIREBRANDS, $state,
                                  CarDeliveryInfoFirebaseService,
                                  CarInfoFirebaseService) {
    var vm = this;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;

    vm.items = ITEMS;

    vm.tireBrands = TIREBRANDS;

    function resetFields() {
      vm.items = {
        rightFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
        leftFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
        leftBackTireSelectedOption: {id: '1', name: 'Bridgestone'},
        rightBackTireSelectedOption: {id: '1', name: 'Bridgestone'},
        extraTireSelectedOption: {id: '1', name: 'Bridgestone'}

      };
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
