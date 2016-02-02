(function() {
  'use strict';

  angular
    .module('budgetrentacar.extraParts')
    .controller('ExtraPartsController', ExtraPartsController);

    ExtraPartsController.$inject = ['ExtraPartsService'];

    function ExtraPartsController(ExtraPartsService){
      var vm = this;
      vm.ExtraPartsService = ExtraPartsService;
      vm.accesories1 = [
        { "name": "GPS", "key": "GPS" },
        {"name": "CSS" , "key": "CSS"}
      ];  
      vm.accesories2 = [
        { "name": "AET", "key": "AET" },
        {"name": "WFI" , "key": "WFI"}
       ];
    }   
})();

