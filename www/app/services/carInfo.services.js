(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .factory('carInfoService', carInfoService);

    carInfoService.$inject = ['$firebaseObject'];

    function carInfoService($firebaseObject){
      return {
        getVehicle : getVehicle
      };
      
      function getVehicle(code){
          var firebaseRef = new Firebase("https://budget-cr.firebaseio.com/vehicles/" + code);
          return $firebaseObject(firebaseRef);
      }
    };
})();
