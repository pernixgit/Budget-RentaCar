(function() {
  'use strict';

  angular
    .module('budgetrentacar.services')
    .service('FirebaseRevisionService', FirebaseRevisionService);

  FirebaseRevisionService.$inject = ['CarInfoFirebaseService',
                                     'FIREBASE_URL'
                                     ];

  function FirebaseRevisionService(CarInfoFirebaseService,
                                   FIREBASE_URL
                                   ) {

    var service = {
      currentRevisionId: null,
      rootRef: new Firebase(FIREBASE_URL),
      pushNewRevision: pushNewRevision,
      pushDamages: pushDamages,
      pushFeedback: pushFeedback
    };

    return service;

    function pushNewRevision(newRevision) {
      var reference = service.rootRef
        .child('revisions');
      var pushRef = reference.push(newRevision);
      saveCreatedRevisionId(pushRef.key());
    }

    function saveCreatedRevisionId(id) {
      service.currentRevisionId = id;
      updateVehicleCurrentRevisionRef();
    }

    function updateVehicleCurrentRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(CarInfoFirebaseService.currentCarId);
      reference.update({
        last_revision_ref: service.currentRevisionId
      });
    }

    function pushDamagesIdToCurrentRevision(id) {
      var reference = service.rootRef
        .child('revisions')
        .child(service.currentRevisionId);
      reference.update({
        damages_ref: id
      });
    }

    function pushDamages(damages) {
      var reference = service.rootRef
        .child('damages');
      var pushReference = reference.push(damages);
      pushDamagesIdToCurrentRevision(pushReference.key());
    }

    function pushFeedbackIdToCurrentRevision(id) {
      var reference = service.rootRef
        .child('revisions')
        .child(service.currentRevisionId);
      reference.update({
        feedback_ref: id
      });
    }

    function pushFeedback(feedback) {
      var reference = service.rootRef
        .child('feedback');
      var pushReference = reference.push(feedback);
      pushFeedbackIdToCurrentRevision(pushReference.key());
    }

  }
})();
