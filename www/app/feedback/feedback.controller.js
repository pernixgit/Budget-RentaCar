(function() {

  'use strict';

  angular
    .module('app.feedback')
    .controller('FeedbackCtrl', FeedbackCtrl);

  /* @ngInject */
  function FeedbackCtrl($state,
                        $translate,
                        RevisionService,
                        FirebaseRevisionService) {
    var vm = this;
    vm.endRevision = endRevision;
    vm.active = 'ES';
    vm.setActive = setActive;
    vm.isActive = isActive;
    vm.feedback = {
      worth_money: null,
      improve: '',
      recommendation: 0,
      rate: 0,
      use_again: null,
      use_again_reason: ''
    };

    function endRevision(feedback) {
      var timestamp = Date.now();
      feedback.timestamp = timestamp;
      RevisionService.setFeedback(feedback);
      FirebaseRevisionService.pushNewRevision(RevisionService.getRevision(), true, timestamp);
      RevisionService.resetRevision();
      $state.go('login');
    }

    function setActive(type) {
      vm.active = type;
      $translate.use(type);
    }

    function isActive(type) {
      return (type === vm.active);
    }
  }
})();
