(function() {
  'use strict';

  angular
  .module('budgetrentacar.scanner.error')
  .controller('ScannerErrorController', ScannerErrorController);

  /* @ngInject */

  function ScannerErrorController($state) {
    var vm = this;
    vm.redirectToScanner = redirectToScanner;

    function redirectToScanner() {
      $state.go('scanner');
    }

  }
})();
