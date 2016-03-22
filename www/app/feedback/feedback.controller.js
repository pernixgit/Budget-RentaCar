(function() {

  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .controller('Feedback', FeedbackController);

  FeedbackController.$inject = ['$state',
                                '$translate',
                                'RevisionService',
                                'FirebaseRevisionService'];

  function FeedbackController($state,
                              $translate,
                              RevisionService,
                              FirebaseRevisionService) {
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
      RevisionService.setTimestamp();
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision());
      if (RevisionService.getDamages()) {
        FirebaseRevisionService.pushDamages(RevisionService.getDamages());
      }
      if (RevisionService.getObservations()) {
        FirebaseRevisionService.pushObservations(
          RevisionService.getObservations());
      }
      FirebaseRevisionService.pushFeedback(feedback);
      RevisionService.resetRevision();
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
