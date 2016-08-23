(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .controller('ScannerMenuCtrl', ScannerMenuCtrl);

  /* @ngInject */

  function ScannerMenuCtrl($state) {

    var vm = this;
    vm.goToScanner = goToScanner;

    function goToScanner() {
      $state.go('scanner');
    }

  }
})();
