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
      vm.accesories1 = [
        { "name": "Antena", "id": "1" },
        {"name": "Documentos Legales" , "id": "2"},
        {"name": "Emblemas", "id": "3" },
        {"name": "Herramientas" , "id": "4"},
        {"name": "Kit de emergencia" , "id": "5"} 
      ];
      
      vm.accesories2 = [
        { "name": "Llanta de repuesto", "id": "6" },
        {"name": "Placas" , "id": "7"},
        {"name": "Rack", "id": "8" },
        {"name": "Rejillas" , "id": "9"},
        {"name": "Alfombras" , "id": "10"}
       ];
    }
      
})();

