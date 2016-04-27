(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('scannerMenu', {
        url: '/scannerMenu',
        templateUrl: 'app/scan-menu/scan-menu.html',
        controller: 'ScannerMenuController',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
