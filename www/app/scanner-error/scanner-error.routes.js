(function() {
  'use strict';

  angular
    .module('app.scanner-error')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('scanner-error', {
        url: '/scanner-error',
        templateUrl: 'app/scanner-error/scanner-error.html',
        controller: 'ScannerErrorCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
