(function() {
	'use strict'

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$ionicPopup'];

    function LoginController($state, $ionicPopup) {
        var vm = this;
        vm.user = { };
        //screen.lockOrientation('portrait');
        vm.register = register;
        vm.authenticate = authenticate;
        
        function register(){
          $ionicPopup.alert({
            tittle: ' Budget Rent a Car ',
            template: ' No disponible en este prototipo '
            })
              .then(function(res){
              });
        }

        function authenticate(username, password){
          if(username === "admin" && password === "admin"){
            authSuccess();
          }else{
            authError();
          }
        } 

        function authSuccess() {
          vm.user = { };
          $state.go('scanner');
        }

        function authError() {
          $ionicPopup.alert({
            title: ' Error de Autenticación',
            template: ' Autenticación Invalida'
          });
        }
    }
})();
