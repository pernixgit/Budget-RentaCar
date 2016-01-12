(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'firebase',
      'budgetrentacar.carInfo',
      'budgetrentacar.login',
      'budgetrentacar.scanner', 
      'ngCordova', 
    ]);
})();
