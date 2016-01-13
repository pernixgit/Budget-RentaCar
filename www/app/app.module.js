(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'budgetrentacar.carExterior',
      'budgetrentacar.carInterior',
      'budgetrentacar.trunk',
      'firebase',
      'budgetrentacar.carInfo',
      'budgetrentacar.login',
      'budgetrentacar.scanner', 
      'ngCordova', 
    ]);
})();
