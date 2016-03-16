(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['$state',
                                    'CarInfoFirebaseService',
                                    'RevisionService'];

  function TireRevisionController($state,
                                  CarInfoFirebaseService,
                                  RevisionService) {
    var vm = this;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction_type;

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
      RevisionService.setCarTires({
        right_front: vm.deliveryOptions.rightFrontTireSelectedOption.name,
        left_front: vm.deliveryOptions.leftFrontTireSelectedOption.name,
        right_rear: vm.deliveryOptions.rightBackTireSelectedOption.name,
        left_rear: vm.deliveryOptions.leftBackTireSelectedOption.name
      });
      resetFields();
      $state.go('carView');
    }
  }
})();
