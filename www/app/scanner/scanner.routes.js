(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('scanner', {
        url: '/scanner',
        templateUrl: 'app/scanner/scanner.html',
        controller: 'ScannerController',
        controllerAs: 'ctrl',
        cache: false
      });
  }
})();
