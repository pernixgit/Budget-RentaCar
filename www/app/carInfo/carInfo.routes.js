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
        controller: 'CarInfoCtrl',
        controllerAs: 'vm',
        resolve: {
          'CarInfoService': function(CarInfoFirebaseService, LastRevisionService) {
            return CarInfoFirebaseService.fetchCarInfo()
              .then(function() {
                return LastRevisionService.fetchRevisionData();
              });
          }
        },
        cache: false
      });
  }
})();
