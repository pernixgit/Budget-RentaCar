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
        url: '/carInfo',
        templateUrl: 'app/carInfo/carInfo.html',
        controller: 'CarInfoController',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
