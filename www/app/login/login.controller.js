(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */

  function LoginCtrl($state,
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
      LoginFirebaseService.verifyAccess();
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

    function handleUserCredentials(user){
      if(user.hasOwnProperty('username') && angular.equals(user.password, vm.password)) {
        LoginFirebaseService.setAuthUser(vm.username);
        RevisionService.setUsername(LoginFirebaseService.getAuthUser());
        _authSuccess();
      } else {
        authError();
      }
    }

    function authenticate(username){
        LoginFirebaseService.logIn(username)
          .then(handleUserCredentials)
          .catch(authError)
    }
  }

})();
