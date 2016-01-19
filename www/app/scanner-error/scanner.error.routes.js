(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner.error')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('scanner-error', {
        url: '/scanner-error',
        templateUrl: 'app/scanner-error/scanner.error.html', 
        controller: 'ScannerErrorController',
        controllerAs: 'vm',
        cache: false
      });
  }
})();