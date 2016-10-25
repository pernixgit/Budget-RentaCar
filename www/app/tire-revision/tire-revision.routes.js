(function() {
  'use strict';

  angular
    .module('app.tire-revision')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('tire-revision', {
        url: '/tire_revision',
        templateUrl: 'app/tire-revision/tire-revision.html',
        controller: 'TireRevisionCtrl',
        controllerAs: 'vm',
        cache: false,
        resolve: {
          'carInfoService': function(carInfoFirebaseService, lastRevisionService) {
            return carInfoFirebaseService.fetchCarInfo()
              .then(
                function() {
                  return lastRevisionService.fetchRevisionData();
                });
          }
        }
      });
  }
})();
