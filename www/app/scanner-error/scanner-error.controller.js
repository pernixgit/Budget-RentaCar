(function() {
  'use strict';

  angular
  .module('app.scanner-error')
  .controller('ScannerErrorCtrl', ScannerErrorCtrl);

  /* @ngInject */
  function ScannerErrorCtrl($state,
                            $ionicNavBarDelegate) {
    var vm = this;
    vm.redirectToScanner = redirectToScanner;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBar(false);
    }

    function redirectToScanner() {
      $state.go('scanner');
    }

  }
})();
