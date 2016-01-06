(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('content', {
        url: '/conent',
        templateUrl: 'app/content/content.html',
        controller: 'contentController',
        controllerAs: 'ctrl'
      });
  }
})();