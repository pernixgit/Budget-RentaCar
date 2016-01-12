(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'firebase',
      'budgetrentacar.home',
      'budgetrentacar.form',
      'budgetrentacar.carInfo',
      'budgetrentacar.login',
      'budgetrentacar.scanner', 
      'ngCordova'
    ]);
})();
