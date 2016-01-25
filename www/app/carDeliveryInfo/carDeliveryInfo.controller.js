(function() {
  'use.strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .controller('carDeliveryInfoController', carDeliveryInfoController);

  carDeliveryInfoController.$inject = ['$scope'];

    function carDeliveryInfoController($scope) {
      $scope.data = {
        availableOptions: [
          {id: '0', name: 'Seleccione el Lugar de Entrega'},
          {id: '1', name: 'Aeropuerto Internacional Juan Santamaría'},
          {id: '2', name: 'Cacique'},
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
          {id: '15', name: '3R'}
        ],
        selectedOption: {id: '0', name: 'Seleccione el Lugar de Entrega'}
      };
    };
})();