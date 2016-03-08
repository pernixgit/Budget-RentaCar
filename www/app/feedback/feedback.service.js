(function() {
  'use strict';

  angular
    .module('budgetrentacar.feedback')
    .service('FeedbackService', FeedbackService);

  FeedbackService.$inject = ['CarInfoFirebaseService', 'FIREBASE_URL'];

  function FeedbackService(CarInfoFirebaseService, FIREBASE_URL) {

    this.pushFeedback = pushFeedback;
    var rootRef  = new Firebase(FIREBASE_URL);

    function pushFeedback(feedback) {
      var reference = rootRef
                        .child('feedback')
                        .child(CarInfoFirebaseService.currentRevisionId);
      reference.update(feedback);
    }
  }
})();
