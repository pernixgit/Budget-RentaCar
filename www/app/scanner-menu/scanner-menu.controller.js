(function() {
  'use strict';

  angular
    .module('app.scanner-menu')
    .controller('ScannerMenuCtrl', ScannerMenuCtrl);

  /* @ngInject */

  function ScannerMenuCtrl($ionicNavBarDelegate,
                           loginService,
                           updateManagerService,
                           scannerService) {

    var vm = this;
    vm.goToScanner = goToScanner;
    vm.goToLogin = goToLogin;

    activate();

    function activate(){
      $ionicNavBarDelegate.showBackButton(false);
      updateManagerService.downloadUpdates();
    }

    function goToScanner() {
      scannerService.scanCode();
    }

    function goToLogin(){
      loginService.logOut();
    }

  }
})();
