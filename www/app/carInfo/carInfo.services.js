(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .factory('carInfoService', carInfoService);

    carInfoService.$inject = ['$firebaseObject', 'firebase_url'];

    function carInfoService($firebaseObject, firebase_url){
      return {
        getVehicle : getVehicle
      };
      
      function getVehicle(code){
          var firebaseRef = new Firebase(firebase_url + "/vehicles/" + code);
          return $firebaseObject(firebaseRef);
      }
    };
})();
