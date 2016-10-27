(function() {
  'use strict';

  angular
    .module('app.feedback')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'app/feedback/feedback.html',
        controller: 'FeedbackCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }

})();
