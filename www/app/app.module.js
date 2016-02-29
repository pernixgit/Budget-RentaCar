(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'firebase',
      'ui.router',
      'budgetrentacar.login',
      'budgetrentacar.services',
      'budgetrentacar.carView',
      'budgetrentacar.content',
      'budgetrentacar.carDeliveryInfo',
      'budgetrentacar.tireRevision',
      'budgetrentacar.carInfo',
      'budgetrentacar.scanner',
      'budgetrentacar.services',
      'budgetrentacar.scanner.error',
      'ngCordova',
      'budgetrentacar.carParts',
      'budgetrentacar.feedback',
      'pascalprecht.translate'
    ]);
})();
