(function() {
	'use strict'

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', ['$scope', '$state', '$ionicPopup', function($scope, $state, $ionicPopup){
      var ctrlScope = $scope;
      ctrlScope.user = { };

      ctrlScope.register = function(){
        $ionicPopup.alert({
          tittle: ' Budget Rent a Car ',
          template: ' No disponible en este Prototipo '
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
        $state.go('carInfo');
      }

      ctrlScope.authError = function() {
        $ionicPopup.alert({
          title: ' Error de Autenticación',
          template: ' Autenticación Invalida'
        });
      }
    }]);
})();
