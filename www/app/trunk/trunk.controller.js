(function() {
  'use strict'; 
 angular
  .module('budgetrentacar.trunk')
  .controller('TrunkController', TrunkController);

    function TrunkController($scope){
        $scope.selection = {
          ids: {"2": true}
        };

        $scope.opciones = [ { "name": "Llanta de repuesto", "id": "1" }, {"name": "Alfombra" , "id": "2"} , {"name": "Herramientas", "id": "3" } ];
   }
})();