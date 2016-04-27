(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .controller('ScannerMenuController', ScannerMenuController);

  ScannerMenuController.$inject = ['$state'];

  function ScannerMenuController($state) {
    var vm = this;
    vm.goToScanner = goToScanner;

    function goToScanner() {
      console.log('at go to scanner');
      $state.go('scanner');
    }
  }
})();
