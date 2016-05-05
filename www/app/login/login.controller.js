(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', LoginController);

  /* @ngInject */

  function LoginController($state,
                           $ionicPopup,
                           LoginFirebaseService,
                           RevisionService,
                           $ionicNavBarDelegate) {
    var vm = this;
    vm.authenticate = authenticate;
    vm._authSuccess = _authSuccess;
    vm._credentialsAreCorrect = _credentialsAreCorrect;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(false);
    }

    function _authSuccess() {
      $state.go('scannerMenu');
    }

    function authError() {
      $ionicPopup.alert({
        title: ' Error de Autenticación',
        template: ' Autenticación Invalida'
      });
    }

    function _credentialsAreCorrect(username, userInfo, password) {
      return username === userInfo.username &&
        password === userInfo.password;
    }

    function authenticate(username, password) {

      LoginFirebaseService.getUserInfo(username).then(
        function(userInfo) {
          if (_credentialsAreCorrect(username, userInfo, password)) {
            _authSuccess();
            RevisionService.setUsername(username);
          }else {
            authError();
          }
        });
    }

  }
})();
