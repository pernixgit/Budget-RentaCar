(function () {
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
      'budgetrentacar.carInfo',
      'budgetrentacar.scanner',
      'budgetrentacar.scanner.error',
      'ngCordova', 
      'budgetrentacar.carParts',
      'budgetrentacar.extraParts'
    ]);
})();
