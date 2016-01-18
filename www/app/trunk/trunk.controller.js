(function() {
  'use strict'; 

   angular
  	.module('budgetrentacar.trunk')
  	.controller('TrunkController', TrunkController);
    function TrunkController(){
       var vm = this;
       vm.taken = {
         ids: {"2": true}
       };
       vm.accesories = [ { "name": "Llanta de repuesto", "id": "1" }, {"name": "Alfombra" , "id": "2"} , {"name": "Herramientas", "id": "3" } ];
   	}
})();

