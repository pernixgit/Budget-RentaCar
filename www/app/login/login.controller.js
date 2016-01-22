(function() {
	'use strict'

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = [ '$state', '$ionicPopup','loginFirebaseService'];

    function LoginController( $state, $ionicPopup, loginFirebaseService) {
      var vm = this;
      vm.user = { };

      vm.register = function(){
        $ionicPopup.alert({
          tittle: ' Budget Rent a Car ',
          template: ' No disponible en este prototipo '
        }).then(function(res){
        });
      }

      vm.authSuccess = function() {
        vm.user = { };
        $state.go('carView');
      }

      vm.authError = function() {
        $ionicPopup.alert({
          title: ' Error de Autenticación',
          template: ' Autenticación Invalida'
        });
      }

      vm.authenticate = function(username, password){
        var firebaseReference = loginFirebaseService.setupFirebaseRef(username);
        firebaseReference.on("value", function(snapshot) {
          try{
            if(username === snapshot.val().username && password === snapshot.val().password){
              vm.authSuccess();
            }else{
              vm.authError();
            }
          }catch(err){
            vm.authError();
          }
        })
      } 
    };
})();

