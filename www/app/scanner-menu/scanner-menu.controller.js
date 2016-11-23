(function() {
  'use strict';

  angular
    .module('app.scanner-menu')
    .controller('ScannerMenuCtrl', ScannerMenuCtrl);

  /* @ngInject */

  function ScannerMenuCtrl($ionicNavBarDelegate,
                           $scope,
                           loginService,
                           revisionService,
                           updateManagerService,
                           scannerService) {

    var vm = this;
    vm.goToScanner = goToScanner;
    vm.goToLogin = goToLogin;

    $scope.$on('$ionicView.beforeEnter', initRevisionSession);

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(false);
      updateManagerService.downloadUpdates();
    }

    function initRevisionSession() {
      loginService.verifyAccess();
      revisionService.resetRevision();
    }

    function goToScanner() {
      scannerService.scanCode();
    }

    function goToLogin() {
      loginService.logOut();
    }

  }
})();
