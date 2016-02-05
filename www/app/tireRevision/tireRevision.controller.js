(function() {
  'use.strict';

  angular
  .module('budgetrentacar.tireRevision')
  .controller('TireRevisionController', TireRevisionController);

  TireRevisionController.$inject = ['$state', 'CarDeliveryInfoFirebaseService', 'CarInfoFirebaseService'];

  function TireRevisionController($state, CarDeliveryInfoFirebaseService, CarInfoFirebaseService) {
    var vm = this;
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToCarView = goToCarView;
    vm.currentCarTraction = '4x2';

    vm.items = {
      rightFrontTireSelectedOption: {id:'1', name: 'Bridgestone'},
      leftFrontTireSelectedOption: {id:'1', name: 'Bridgestone'},
      leftBackTireSelectedOption: {id:'1', name: 'Bridgestone'},
      rightBackTireSelectedOption: {id:'1', name: 'Bridgestone'}
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

    function resetFields(){
      vm.items = {
        rightFrontTireSelectedOption: {id:'1', name: 'Bridgestone'},
        leftFrontTireSelectedOption: {id:'1', name: 'Bridgestone'},
        leftBackTireSelectedOption: {id:'1', name: 'Bridgestone'},
        rightBackTireSelectedOption: {id:'1', name: 'Bridgestone'}
      };
    }

    function goToCarView(){
      CarDeliveryInfoFirebaseService.pushNewItems({right_front_tire: vm.items.rightFrontTireSelectedOption.name, 
        left_front_tire: vm.items.leftFrontTireSelectedOption.name, 
        right_back_tire: vm.items.rightBackTireSelectedOption.name, 
        left_back_tire: vm.items.leftBackTireSelectedOption.name});
      resetFields();
      $state.go('carView');
    }
  }
})();
