(function() {
  'use strict';

  angular
    .module('budgetrentacar.extraParts')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('extraParts', {
        url: '/extraParts',
        templateUrl: 'app/extraParts/extraParts.html',
        controller: 'ExtraPartsController',
        controllerAs: 'ctrlEx'
      });
  }
})();
