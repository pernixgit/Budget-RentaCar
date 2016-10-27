(function() {
  'use strict';

  angular
    .module('app.content')
    .config(config);

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
