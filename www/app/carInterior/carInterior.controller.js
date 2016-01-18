(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInterior')
    .controller('CarInteriorController', CarInteriorController);
    function CarInteriorController(){
      var vm = this;
      vm.taken = {
        ids: {"2": true}
      };
      vm.accesories = [ { "name": "Alfombras", "id": "1" }, {"name": "Cenicero" , "id": "2"} , {"name": "GPS", "id": "3" }, {"name": "AET" , "id": "4"} , {"name": "Documentos Legales" , "id": "5"} ,{"name": "Sofá para bebé" , "id": "6"} ,{"name": "Booster" , "id": "7"} ];
    }
})();

