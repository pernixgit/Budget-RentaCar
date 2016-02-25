(function(){

  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .controller('Feedback', Feedback);

  Feedback.$inject = ['FeedbackService'];

  function Feedback(FeedbackService){
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
    }

  } 

})();