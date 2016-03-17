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
        resolve:{
          'Tire Revision': function(LastRevisionService){
              return LastRevisionService.fetchRevisionData();
          }
        },
      });
  }
})();
