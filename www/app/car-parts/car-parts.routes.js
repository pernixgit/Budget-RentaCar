(function() {
  'use strict';

  angular
    .module('app.car-parts')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('car-parts', {
        url: '/car_parts',
        templateUrl: 'app/car-parts/car-parts.html',
        controller: 'CarPartsCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
