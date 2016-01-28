(function() {
  'use strict'; 
  
  angular
    .module('budgetrentacar.carTrunk')
  	.controller('carTrunkController', carTrunkController);
    
    function carTrunkController(){
       var vm = this;
       vm.taken = {
         ids: {"2": true}
       };
       vm.accesories = [ { "name": "Llanta de repuesto", "id": "1" }, 
                        {"name": "Alfombra" , "id": "2"}, {"name": "Herramientas", "id": "3" } ];
   	}
})();
