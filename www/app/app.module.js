(function() {
  'use strict';

  angular
    .module('budgetrentacar', [
      'ionic',
      'ui.router',
      'firebase',
      'ngCordova',
      'ionic.cloud',
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
      'budgetrentacar.carParts',
      'budgetrentacar.feedback',
      'pascalprecht.translate'
    ]);
})();
