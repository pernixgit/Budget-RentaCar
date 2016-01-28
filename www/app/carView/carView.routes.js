(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('carView', {
        url: '/carview',
        templateUrl: 'app/carView/carView.html',
        controller: 'CarViewController',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
