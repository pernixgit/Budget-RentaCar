(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInterior')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carInterior', {
        url: '/carInterior',
        templateUrl: 'app/carInterior/carInterior.html',
        controller: 'CarInteriorController',
        controllerAs: 'ctrlInt'
      });
  }
})();
