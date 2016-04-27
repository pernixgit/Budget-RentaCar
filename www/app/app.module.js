(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'firebase',
      'budgetrentacar.login',
      'budgetrentacar.services',
      'budgetrentacar.scan-menu',
      'budgetrentacar.carView',
      'budgetrentacar.content',
      'budgetrentacar.carDeliveryInfo',
      'budgetrentacar.tireRevision',
      'budgetrentacar.carInfo',
      'budgetrentacar.scanner',
      'budgetrentacar.services',
      'budgetrentacar.observations',
      'budgetrentacar.scanner.error',
      'ngCordova',
      'budgetrentacar.carParts',
      'budgetrentacar.feedback',
      'pascalprecht.translate'
    ]);
})();
