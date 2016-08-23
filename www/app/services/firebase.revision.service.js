(function() {
  'use strict';

  angular
    .module('budgetrentacar.services')
    .service('FirebaseRevisionService', FirebaseRevisionService);

  /* @ngInject */

  function FirebaseRevisionService(CarInfoFirebaseService,
                                   FIREBASE_URL,
                                   CarViewService,
                                   RevisionService,
                                   ObservationsService) {

    var service = {
      currentRevisionId: null,
      rootRef: new Firebase(FIREBASE_URL),
      pushNewRevision: pushNewRevision,
      pushDamages: pushDamages,
      pushObservations: pushObservations,
      pushFeedback: pushFeedback
    };

    return service;

    function pushRevision(newRevision) {
      var revisionRootReference = service.rootRef
        .child('revisions');
      var pushRef = revisionRootReference.push(newRevision);
      service.currentRevisionId = pushRef.key();
      return pushRef;
    }

    function pushRevisionItems(isCheckIn) {
      if (RevisionService.getDamages()) {
        pushDamages(RevisionService.getDamages());
      }
      if (RevisionService.getObservations()) {
        pushObservations(RevisionService.getObservations());
      }
      if (isCheckIn) {
        pushFeedback(RevisionService.getFeedback());
      }
    }

    function pushNewRevision(newRevision, isCheckIn, timestamp) {
      RevisionService.setTimestamp(timestamp);
      ObservationsService.setObservationsToService();
      var pushRef = pushRevision(newRevision);
      pushRevisionItems(isCheckIn);
      saveCreatedRevisionId(pushRef.key());
    }

    function saveCreatedRevisionId(id) {
      service.currentRevisionId = id;
      updateVehicleCurrentRevisionRef();
    }

    function updateVehicleCurrentRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(CarInfoFirebaseService.carInfo.MVA);
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

    function pushObservationsIdToCurrentRevision(id) {
      var reference = service.rootRef
        .child('revisions')
        .child(service.currentRevisionId);
      reference.update({
        observations_ref: id
      });
    }

    function pushDamages(damages) {
      var damagesRootReference = service.rootRef
        .child('damages');
      var damagesKey = damagesRootReference.push().key();
      var damagesRef = damagesRootReference.child(damagesKey);
      angular.forEach(damages, function(damage) {
        damagesRef.push(damage);
      });
      pushDamagesIdToCurrentRevision(damagesKey);
      CarViewService.resetDamages();
    }

    function pushObservations(observations) {
      var observationsRootReference = service.rootRef
        .child('observations');
      var observationsKey = observationsRootReference.push().key();
      var observationsRef = observationsRootReference.child(observationsKey);
      angular.forEach(observations, function(observation) {
        observationsRef.push(observation);
      });
      pushObservationsIdToCurrentRevision(observationsKey);
    }

    function pushFeedbackIdToCurrentRevision(id) {
      var reference = service.rootRef
        .child('revisions')
        .child(service.currentRevisionId);
      reference.update({
        feedback_ref: id
      });
    }

    function pushCurrentRevisionIdToFeedback(id) {
      var reference = service.rootRef
        .child('feedback')
        .child(id);
      reference.update({
        revision_ref: service.currentRevisionId
      });
    }

    function pushFeedback(feedback) {
      var reference = service.rootRef
        .child('feedback');
      var pushReference = reference.push(feedback);
      pushFeedbackIdToCurrentRevision(pushReference.key());
      pushCurrentRevisionIdToFeedback(pushReference.key());
    }

  }
})();
