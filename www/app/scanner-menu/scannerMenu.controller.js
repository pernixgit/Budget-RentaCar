(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .controller('ScannerMenuCtrl', ScannerMenuCtrl);

  /* @ngInject */

  function ScannerMenuCtrl($state,
                           $ionicNavBarDelegate,
                           LoginFirebaseService,
                           updateManagerService,
                           ScannerService) {

    var vm = this;
    vm.goToScanner = goToScanner;
    vm.goToLogin = goToLogin;

    activate();

    function activate(){
      $ionicNavBarDelegate.showBackButton(false);
      updateManagerService.downloadUpdates();
    }

    function goToScanner() {
      ScannerService.scanCode();
    }

    function goToLogin(){
      LoginFirebaseService.logOut();
    }

  }
})();
