(function() {

  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .controller('Feedback', FeedbackController);

  FeedbackController.$inject = ['FeedbackService', '$state', '$translate'];

  function FeedbackController(FeedbackService, $state, $translate) {
    var vm = this;
    vm.endRevision = endRevision;
    vm.active = 'ES';
    vm.setActive = setActive;
    vm.isActive = isActive;
    vm.feedback = {
      valueMoney: null,
      improve: null,
      recommendation: 0,
      rate: 0,
      useAgain: null,
      useAgainReason: null
    };

    function endRevision(feedback) {
      FeedbackService.pushFeedback(feedback);
      $state.go('login');
    }

    function setActive(type) {
      vm.active = type;
      $translate.use(type);
    }

    function isActive(type) {
      return type === vm.active;
    }
  }
})();
