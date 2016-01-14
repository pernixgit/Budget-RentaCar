(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'firebase',
      'ui.router',
      'budgetrentacar.login',
      'budgetrentacar.carView',
      'budgetrentacar.content',
      'budgetrentacar.carInfo',
      'budgetrentacar.scanner', 
      'ngCordova', 
    ]);
})();
