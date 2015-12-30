(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('AuthService', ['$firebaseAuth', '$localStorage', 'jwtHelper', function($firebaseAuth, $localStorage, jwtHelper) { 
      var ref = new Firebase('https://budget-cr.firebaseio.com/');
      var authProvider = $firebaseAuth(ref);

      this.isAuthenticated = function() {
        var token = $localStorage['access_token'];
        if (!token)
          return false;
        else
          return !jwtHelper.isTokenExpired(token);
      }

      this.authWithPassword = function(credentials) {
        return authProvider.$authWithPassword(credentials);
      }
    }]);
})();