(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .controller('LoginController', ['$scope', '$state', '$ionicPopup', '$localStorage', 'AuthService', function($scope, $state, $ionicPopup, $localStorage, AuthService) {
      var ctrlScope = $scope;
      ctrlScope.user = { };

      ctrlScope.createAccount = function(){
        $ionicPopup.alert({
          tittle: 'Budget Rent a Car',
          template: 'Not available in this prototype'  
        }).then(function(res){
          console.log('Show alert')
        });
      };

      ctrlScope.login = function(){
        console.log("login submit : " + ctrlScope.user);
        AuthService.authWithPassword(ctrlScope.user)
          .then(ctrlScope.authSuccess)
          .catch(ctrlScope.authError);
      }

      ctrlScope.authSuccess = function(authData) {
        saveAuthData(authData);
        $ionicPopup.alert({
          title: 'Welcome',
          template: 'Logged In as ' + authData.password.email
        });
        ctrlScope.user = {};
        $state.go('side.home');
      }

      ctrlScope.saveAuthData = function(authData) {
        $localStorage['uid'] = authData.uid;
        $localStorage['provider'] = authData.provider;
        $localStorage['access_token'] = authData.token;
        $localStorage['email'] = authData.password.email;
        $localStorage['profileImageURL'] = authData.password.profileImageURL;
      }

      ctrlScope.authError = function(error) {
        $ionicPopup.alert({
          title: 'Authentication error',
          template: error
        });
      }
    }]);
})();