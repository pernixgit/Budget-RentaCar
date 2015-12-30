(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'firebase',
      'ngStorage',
      'angular-jwt',
      'ui.router',
   
      'budgetrentacar.login',
      'budgetrentacar.home'
    ]);
})();