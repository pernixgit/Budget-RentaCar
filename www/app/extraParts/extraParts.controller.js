(function() {
  'use strict';

  angular
    .module('budgetrentacar.extraParts')
    .controller('ExtraPartsController', ExtraPartsController);

    ExtraPartsController.$inject = ['ExtraPartsService', '$state'];

    function ExtraPartsController(ExtraPartsService, $state){
      var vm = this;
      vm.ExtraPartsService = ExtraPartsService;
      vm.finishRevision = finishRevision;
      vm.items = {
              'CSS' : false,
              'AET' : false,
              'GPS' : false,
              'WFI' : false
      };

      vm.accesories1 = [
        {"name": "GPS", "key": "GPS" },
        {"name": "CSS" , "key": "CSS"}
      ];  
      
      vm.accesories2 = [
        {"name": "AET", "key": "AET" },
        {"name": "WFI" , "key": "WFI"}
       ];
    
      function finishRevision(){
        ExtraPartsService.pushNewItems(vm.items);
        $state.go('login');
      }
    }   
})();
