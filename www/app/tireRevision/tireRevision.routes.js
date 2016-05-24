(function() {
  'use strict';

  angular
    .module('budgetrentacar.tireRevision')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('tireRevision', {
        url: '/tireRevision',
        templateUrl: 'app/tireRevision/tireRevision.html',
        controller: 'TireRevisionController',
        controllerAs: 'vm',
        cache: false,
        resolve: {
          'CarInfoService': function(CarInfoFirebaseService, LastRevisionService) {
            return CarInfoFirebaseService.fetchCarInfo()
              .then(
                function() {
                  return LastRevisionService.fetchRevisionData();
                });
          }
        }
      });
  }
})();
