(function() {
  'use strict';

  angular
    .module('budgetrentacar.form')
    .config(config);

  config.$inject = ['$stateProvider'];

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/form',
        templateUrl: 'app/form/form.html',
        controller: 'FormController',
        controllerAs: 'ctrl'
      });
  }
})();