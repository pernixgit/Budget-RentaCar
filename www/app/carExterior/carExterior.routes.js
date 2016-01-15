(function() {
  'use strict';

  angular
    .module('budgetrentacar.carExterior')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carExterior', {
        url: '/carExterior',
        templateUrl: 'app/carExterior/carExterior.html',
        controller: 'CarExteriorController',
        controllerAs: 'ctrlExt'
      });
  }
})();
