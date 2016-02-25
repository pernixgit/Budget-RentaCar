(function(){

  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .controller('Feedback', FeedbackController);

  FeedbackController.$inject = ['FeedbackService', '$state'];

  function FeedbackController(FeedbackService, $state){
    var vm = this;
    vm.endRevision = endRevision;

    vm.feedback = {
      valueMoney: null,
      improve: null,
      recommendation: 0,
      rate: 0,
      useAgain: null,
      useAgainReason: null
    };

    function endRevision(feedback){
      FeedbackService.pushFeedback(feedback);
      $state.go('login');
    }

  } 

})();
