(function() {
  'use strict';

  angular
    .module('budgetrentacar.scan-menu')
    .controller('ScannerMenuCtrl', ScannerMenuCtrl);

  /* @ngInject */

  function ScannerMenuCtrl($state,
                           LoginFirebaseService,
                           $ionicNavBarDelegate) {

    var vm = this;
    vm.goToScanner = goToScanner;
    vm.goToLogin = goToLogin;

    activate();

    function activate(){
      $ionicNavBarDelegate.showBackButton(false);
    }

    function goToScanner() {
      $state.go('scanner');
    }

    function goToLogin(){
      LoginFirebaseService.logOut();
    }

  }
})();
