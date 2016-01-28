(function() {
  'use strict';

  angular
    .module('budgetrentacar.carTrunk')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carTrunk', {
        url: '/carTrunk',
        templateUrl: 'app/carTrunk/carTrunk.html',
        controller: 'carTrunkController',
        controllerAs: 'vm'
      });
  }
})();
