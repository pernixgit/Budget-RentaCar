(function() {
  'use strict';

  angular
    .module('app.car-delivery')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('car-delivery', {
        url: '/car_delivery',
        templateUrl: 'app/car-delivery/car-delivery.html',
        controller: 'CarDeliveryCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
