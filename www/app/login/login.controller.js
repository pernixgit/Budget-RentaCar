(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state', '$ionicPopup','LoginFirebaseService', 'RevisionService'];

  function LoginController($state, $ionicPopup, LoginFirebaseService, RevisionService) {
    var vm = this;
    vm.authenticate = authenticate;

    function authSuccess() {
      $state.go('scanner');
    }

    function authError() {
      $ionicPopup.alert({
        title: ' Error de Autenticación',
        template: ' Autenticación Invalida'
      });
    }

    function authenticate(username, password) {
      var firebaseReference = LoginFirebaseService.setupFirebaseRef(username);
      firebaseReference.on('value', function(snapshot) {
        try {
          if (username === snapshot.val().username &&
            password === snapshot.val().password) {
            authSuccess();
            RevisionService.setUsername(username);
          }else {
            authError();
          }
        }catch (err) {
          authError();
        }
      });
    }
  };
})();
