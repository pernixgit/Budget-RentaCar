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

      vm.accesories = [
        {"name": "GPS", "key": "GPS" },
        {"name": "CSS" , "key": "CSS"},
        {"name": "AET", "key": "AET" },
        {"name": "WFI" , "key": "WFI"}
       ];
    
      function resetItems(){
        vm.items = {
                'CSS' : false,
                'AET' : false,
                'GPS' : false,
                'WFI' : false
        };
      }

      function finishRevision(){
        ExtraPartsService.pushNewItems(vm.items);
        resetItems();
        $state.go('login');
      }
    }   
})();
