(function() {
  'use strict';

  angular
    .module('app.car-info')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('car-info', {
        url: '/car_info',
        templateUrl: 'app/car-info/car-info.html',
        controller: 'CarInfoCtrl',
        controllerAs: 'vm',
        cache: false,
        resolve: {
          'carInfoStatus': function(carInfoService, lastRevisionService) {
            return carInfoService.fetchCarInfo()
              .then(function(carInfo) {
                carInfoService.carInfo = carInfo;
              })
              .then(lastRevisionService.fetchData);
          }
        },
      });
  }
})();
