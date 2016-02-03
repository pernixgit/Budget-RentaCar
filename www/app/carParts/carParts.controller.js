(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .controller('CarPartsController', CarPartsController);

    CarPartsController.$inject = ['CarPartsService', '$state'];

    function CarPartsController(CarPartsService, $state){
      var vm = this;
      vm.CarPartsService = CarPartsService;
      vm.goToExtras = goToExtras;
      vm.items = {
        'antenna' : false,
        'legal-documents' : false,
        'emblems' : false,
        'tools' : false,
        'emergency-kit' : false,
        'back-up-tire' : false,
        'plates' : false,
        'rack' : false,
        'air-conditioner-grids' : false,
        'carpet' : false
      };
      
      vm.accesories1 = [
        {"name": "Antena", "key": "antenna" },
        {"name": "Documentos Legales" , "key": "legal-documents"},
        {"name": "Emblemas", "key": "emblems" },
        {"name": "Herramientas" , "key": "tools"},
        {"name": "Kit de emergencia" , "key": "emergency-kit"} 
      ];
      
      vm.accesories2 = [
        {"name": "Llanta de repuesto", "key": "back-up-tire" },
        {"name": "Placas" , "key": "plates"},
        {"name": "Rack", "key": "rack" },
        {"name": "Rejillas" , "key": "air-conditioner-grids"},
        {"name": "Alfombras" , "key": "carpet"}
       ];

       function goToExtras(){
          CarPartsService.pushNewItems(vm.items);
          $state.go('extraParts');
       }
    }   
})();
