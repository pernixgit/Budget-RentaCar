(function() {
  'use strict';

  angular
    .module('app.car-damages')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('car-damages', {
        url: '/car_damages',
        templateUrl: 'app/car-damages/car-damages.html',
        controller: 'CarDamagesCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
