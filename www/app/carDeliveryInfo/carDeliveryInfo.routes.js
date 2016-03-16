(function() {
  'use strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('carDeliveryInfo', {
        url: '/carDeliveryInfo',
        templateUrl: 'app/carDeliveryInfo/carDeliveryInfo.html',
        controller: 'CarDeliveryInfoController',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
