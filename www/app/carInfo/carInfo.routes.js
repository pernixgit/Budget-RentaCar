(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carInfo', {
        url: '/carinfo',
        templateUrl: 'app/carInfo/carInfo.html',
        controller: 'carInfoController',
        controllerAs: 'ctrl'
      });
  }
})();