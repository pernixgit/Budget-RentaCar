(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .controller('ScannerMenuController', ScannerMenuController);

  /* @ngInject */

  function ScannerMenuController($state) {

    var vm = this;
    vm.goToScanner = goToScanner;

    function goToScanner() {
      $state.go('scanner');
    }

  }
})();
