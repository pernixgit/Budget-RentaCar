(function() {
  'use strict';

  angular
    .module('app.scanner-menu')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('scanner-menu', {
        url: '/scanner_menu',
        templateUrl: 'app/scanner-menu/scanner-menu.html',
        controller: 'ScannerMenuCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
