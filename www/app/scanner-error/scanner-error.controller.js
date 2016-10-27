(function() {
  'use strict';

  angular
  .module('app.scanner-error')
  .controller('ScannerErrorCtrl', ScannerErrorCtrl);

  /* @ngInject */
  function ScannerErrorCtrl($state) {
    var vm = this;
    vm.redirectToScanner = redirectToScanner;

    function redirectToScanner() {
      $state.go('scanner');
    }

  }
})();
