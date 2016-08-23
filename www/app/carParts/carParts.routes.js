(function() {
  'use strict';

  angular
    .module('budgetrentacar.carParts')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carParts', {
        url: '/carParts',
        templateUrl: 'app/carParts/carParts.html',
        controller: 'CarPartsCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
