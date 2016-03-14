(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['$state',
                                    'TireRevisionFirebaseService',
                                    'CarInfoFirebaseService'];

  function TireRevisionController($state,
                                  TireRevisionFirebaseService,
                                  CarInfoFirebaseService) {
    var vm = this;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;

    vm.deliveryOptions = {
      rightFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
      leftFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
      leftBackTireSelectedOption: {id: '1', name: 'Bridgestone'},
      rightBackTireSelectedOption: {id: '1', name: 'Bridgestone'}
    };

    vm.tireBrands = [
      {id: '0', name: 'Dunlop'},
      {id: '1', name: 'Bridgestone'},
      {id: '2', name: 'Yokohama'},
      {id: '3', name: 'Firestone'},
      {id: '4', name: 'Pirelli'},
      {id: '5', name: 'Kumho'},
      {id: '6', name: 'Hankook'},
      {id: '7', name: 'Goodyear'},
      {id: '8', name: 'Michelin'},
      {id: '9', name: 'Toyo'},
      {id: '10', name: 'Otros'}
    ];

    function resetFields() {
      vm.deliveryOptions = {
        rightFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
        leftFrontTireSelectedOption: {id: '1', name: 'Bridgestone'},
        leftBackTireSelectedOption: {id: '1', name: 'Bridgestone'},
        rightBackTireSelectedOption: {id: '1', name: 'Bridgestone'}
      };
    }

    function goToCarView() {
      TireRevisionFirebaseService
        .pushTires(
          { rightFrontTire: vm.deliveryOptions.rightFrontTireSelectedOption.name,
            leftFrontTire: vm.deliveryOptions.leftFrontTireSelectedOption.name,
            rightBackTire: vm.deliveryOptions.rightBackTireSelectedOption.name,
            leftBackTire: vm.deliveryOptions.leftBackTireSelectedOption.name
          });
      resetFields();
      $state.go('carView');
    }
  }
})();
