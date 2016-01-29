(function() {
  'use strict';

  angular
    .module('budgetrentacar.extraParts')
    .controller('ExtraPartsController', ExtraPartsController);
    function ExtraPartsController(){
      var vm = this;
      vm.taken = {
        ids: {"2": true}
      };
      vm.accesories1 = [
        { "name": "GPS", "id": "1" },
        {"name": "CSS" , "id": "2"}
      ];
      
      vm.accesories2 = [
        { "name": "AET", "id": "3" },
        {"name": "WFI" , "id": "4"}
       ];
    }
      
})();

