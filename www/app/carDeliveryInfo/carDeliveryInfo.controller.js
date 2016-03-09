(function() {
  'use.strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .controller('CarDeliveryInfoController', CarDeliveryInfoController);

  CarDeliveryInfoController.$inject = ['$state',
    'CarDeliveryInfoFirebaseService',
    'CarInfoFirebaseService'];

  function CarDeliveryInfoController($state,
                                     CarDeliveryInfoFirebaseService,
                                     CarInfoFirebaseService) {
    var vm = this;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToTireRevision = goToTireRevision;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;
    vm.accesory = {
      deliverySelectedOption: {id: '1', name: 'Cacique'},
      gasSelectedOption: {id: '0', name: 'Vacio'},
    };
    vm.availableOptions = [
      {id: '1', name: 'Cacique'},
      {id: '2', name: 'Aeropuerto Internacional Juan Santamaría'},
      {id: '3', name: 'San José'},
      {id: '4', name: 'Liberia'},
      {id: '5', name: 'Tamarindo'},
      {id: '6', name: 'Escazú'},
      {id: '7', name: 'Jacó'},
      {id: '8', name: 'Quepos'},
      {id: '9', name: 'Mal País'},
      {id: '10', name: 'Tambor'},
      {id: '11', name: 'Manuel Antonio'},
      {id: '12', name: 'Andaz'},
      {id: '13', name: 'Dreams'},
      {id: '14', name: 'Purdy Autos'},
      {id: '15', name: '3R'},
    ];

    vm.gasAvailableOptions = [
      {id: '0', name: 'Vacio'},
      {id: '1', name: '1/8'},
      {id: '2', name: '1/4'},
      {id: '3', name: '3/8'},
      {id: '4', name: '1/2'},
      {id: '5', name: '5/8'},
      {id: '6', name: '7/8'},
      {id: '7', name: 'Lleno'}
    ];

    function resetFields() {
      vm.accesory = {deliverySelectedOption:
      {id: '0', name: 'Seleccione el Lugar de Entrega'},
        gasSelectedOption: {id: '0', name: 'Vacio'},
        };
    }

    function goToTireRevision() {
      CarDeliveryInfoFirebaseService.pushTires({
        deliveryPlace: vm.accesory.deliverySelectedOption.name,
        gas: vm.accesory.gasSelectedOption.name});
      resetFields();
      $state.go('tireRevision');
    }
  }
})();
