(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'firebase',
      'ui.router',
      'budgetrentacar.login',
      'budgetrentacar.home',
      'budgetrentacar.form',
      'budgetrentacar.carView',
      'budgetrentacar.content',
      'budgetrentacar.scanner', 
      'ngCordova'
    ]);
})();
