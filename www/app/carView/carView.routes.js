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
        url: '/carView',
        templateUrl: 'app/carView/carView.html',
        controller: 'CarViewCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
