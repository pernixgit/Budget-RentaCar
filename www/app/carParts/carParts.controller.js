(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

    CarPartsController.$inject = ['CarPartsService'];

    function CarPartsController(CarPartsService){
      var vm = this;
      vm.CarPartsService = CarPartsService;
      vm.accesories1 = [
        {"name": "Antena", "key": "antenna" },
        {"name": "Documentos Legales" , "key": "legal-documents"},
        {"name": "Emblemas", "key": "emblems" },
        {"name": "Herramientas" , "key": "tools"},
        {"name": "Kit de emergencia" , "key": "emergency-kit"} 
      ];
      vm.accesories2 = [
        { "name": "Llanta de repuesto", "key": "back-up-tire" },
        {"name": "Placas" , "key": "plates"},
        {"name": "Rack", "key": "rack" },
        {"name": "Rejillas" , "key": "air-conditioner-grids"},
        {"name": "Alfombras" , "key": "carpet"}
       ];
    }   
})();

