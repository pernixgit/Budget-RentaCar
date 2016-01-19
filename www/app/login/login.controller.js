(function() {
	'use strict'

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$ionicPopup'];

    function LoginController($state, $ionicPopup) {
      var ctrlScope = this;
      ctrlScope.user = { };
      //screen.lockOrientation('portrait');

      ctrlScope.register = function(){
        $ionicPopup.alert({
          tittle: ' Budget Rent a Car ',
          template: ' No disponible en este prototipo '
        }).then(function(res){
        });
      }

      ctrlScope.authenticate = function(username, password){
        if(username === "admin" && password === "admin"){
          ctrlScope.authSuccess();
        }else{
          ctrlScope.authError();
        }
      } 

      ctrlScope.authSuccess = function() {
        ctrlScope.user = { };
        $state.go('scanner');
      }

      ctrlScope.authError = function() {
        $ionicPopup.alert({
          title: ' Error de Autenticación',
          template: ' Autenticación Invalida'
        });
      }
    };
})();
