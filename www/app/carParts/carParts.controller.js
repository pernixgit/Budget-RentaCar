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
        'antenna' : true,
        'legal-documents' : true,
        'emblems' : true,
        'tools' : true,
        'emergency-kit' : true,
        'back-up-tire' : true,
        'plates' : true,
        'rack' : false,
        'carpet' : true
      };
      
      vm.accesories = [
        {"name": "Antena", "key": "antenna" },
        {"name": "Documentos Legales" , "key": "legal-documents"},
        {"name": "Emblemas", "key": "emblems" },
        {"name": "Herramientas" , "key": "tools"},
        {"name": "Kit de emergencia" , "key": "emergency-kit"}, 
        {"name": "Llanta de repuesto", "key": "back-up-tire" },
        {"name": "Placas" , "key": "plates"},
        {"name": "Rack", "key": "rack" },
        {"name": "Alfombras" , "key": "carpet"}
       ];

       function resetItems(){
        vm.items = {
          'antenna' : true,
          'legal-documents' : true,
          'emblems' : true,
          'tools' : true,
          'emergency-kit' : true,
          'back-up-tire' : true,
          'plates' : true,
          'rack' : false,
          'carpet' : true
        };
       }

       function goToExtras(){
          CarPartsService.pushNewItems(vm.items);
          resetItems();
          $state.go('extraParts');
       }
    }   
})();
