(function() {

  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .controller('Feedback', FeedbackController);

  FeedbackController.$inject = ['FeedbackService', '$state', '$translate', 'RevisionService'];

  function FeedbackController(FeedbackService, $state, $translate, RevisionService) {
    var vm = this;
    vm.endRevision = endRevision;
    vm.active = 'ES';
    vm.setActive = setActive;
    vm.isActive = isActive;
    vm.feedback = {
      worthMoney: null,
      improve: null,
      recommendation: 0,
      rate: 0,
      useAgain: null,
      useAgainReason: null
    };

    function endRevision(feedback) {
      RevisionService.setFeedback(feedback);
      console.log(RevisionService.getRevision().feedback);
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
