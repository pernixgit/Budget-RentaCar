(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($state,
                     $ionicPopup,
                     $ionicNavBarDelegate,
                     loginService,
                     revisionService) {
    
    var vm = this;
    vm.authenticate = authenticate;
    vm._authSuccess = _authSuccess;
    vm._credentialsAreCorrect = _credentialsAreCorrect;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(false);
    }

    function _authSuccess() {
      $state.go('scanner-menu');
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
        loginService.setAuthUser(vm.username);
        revisionService.setUsername(loginService.getAuthUser());
        _authSuccess();
      } else {
        authError();
      }
    }

    function authenticate(username){
        loginService.logIn(username)
          .then(handleUserCredentials)
          .catch(authError)
    }
  }

})();
