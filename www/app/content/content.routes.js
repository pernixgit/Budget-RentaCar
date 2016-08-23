(function() {
  'use strict';

  angular
    .module('budgetrentacar.content')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('content', {
        url: '/content',
        templateUrl: 'app/content/content.html',
        controller: 'ContentCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
