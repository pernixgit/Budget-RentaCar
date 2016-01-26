(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);
    function CarPartsController(){
      var vm = this;
      vm.taken = {
        ids: {"2": true}
      };
      vm.accesories = [ { "name": "Candado de Repuesto", "id": "1" }, {"name": "Tapón Gasolina" , "id": "2"} , {"name": "Escobillas", "id": "3" }, {"name": "Antenas" , "id": "4"} , {"name": "Canasta" , "id": "5"} ];
   }
})();

