(function() {
  'use strict';

  angular
    .module('budgetrentacar')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'vm',
          cache: false
        })
      $urlRouterProvider.otherwise('/');
    });
})();

