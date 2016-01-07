(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',

      'budgetrentacar.login',
      'budgetrentacar.home',
      'budgetrentacar.form'
    ]);
})();
