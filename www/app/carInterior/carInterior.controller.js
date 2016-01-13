(function() {
  'use strict';
  angular
    .module('budgetrentacar.carInterior')
    .controller('CarInteriorController', CarInteriorController);

  function CarInteriorController($scope){
        $scope.seleccionados = {
          ids: {"2": true}
        };

        $scope.accesorios = [ { "name": "Alfombras", "id": "1" }, {"name": "Cenicero" , "id": "2"} , {"name": "GPS", "id": "3" }, {"name": "AET" , "id": "4"} , {"name": "Documentos Legales" , "id": "5"} ,{"name": "Sofá para bebé" , "id": "6"} ,{"name": "Booster" , "id": "7"} ];
   }
})();