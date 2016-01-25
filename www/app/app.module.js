(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'budgetrentacar.carExterior',
      'budgetrentacar.carInterior',
      'budgetrentacar.carTrunk',
      'firebase',
      'ui.router',
      'budgetrentacar.login',
      'budgetrentacar.carView',
      'budgetrentacar.content',
      'budgetrentacar.carDeliveryInfo',
      'budgetrentacar.carInfo',
      'budgetrentacar.scanner', 
      'budgetrentacar.scanner.error',
      'ngCordova', 
    ]);
})();
