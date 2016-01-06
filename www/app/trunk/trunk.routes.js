(function() {
  'use strict';

  angular
    .module('budgetrentacar.trunk')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('trunk', {
        url: '/trunk',
        templateUrl: 'app/trunk/trunk.html',
        controller: 'TrunkController',
        controllerAs: 'ctrl'
      });
  }
})();