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
        templateUrl: 'app/scanner-menu/scannerMenu.html',
        controller: 'ScannerMenuCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
