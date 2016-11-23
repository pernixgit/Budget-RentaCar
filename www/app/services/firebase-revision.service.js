(function() {
  'use strict';

  angular
    .module('app.services')
    .service('firebaseRevisionService', firebaseRevisionService);

  /* @ngInject */
  function firebaseRevisionService(carInfoService,
                                   carDamagesService,
                                   revisionService,
                                   observationsService,
                                   lastRevisionService,
                                   FIREBASE_URL,
                                   UNUSED_PROPERTIES) {

    var service = {
      currentRevisionId: null,
      rootRef: new Firebase(FIREBASE_URL),
      pushNewRevision: pushNewRevision,
      pushDamages: pushDamages,
      pushObservations: pushObservations
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
      if (revisionService.getDamages()) {
        pushDamages(revisionService.getDamages());
      }
      if (revisionService.getObservations()) {
        pushObservations(revisionService.getObservations());
      }
    }

    function pushNewRevision(newRevision, timestamp) {
      revisionService.setTimestamp(timestamp);
      observationsService.setObservationsToService();
      var cleanRevision = cleanUpRevisionObject(newRevision);
      var pushRef = pushRevision(cleanRevision);
      pushRevisionItems();
      saveCreatedRevisionId(pushRef.key());
      revisionService.resetRevision();
      lastRevisionService.reset();
    }

    function cleanUpRevisionObject(revision) {
      angular.forEach(UNUSED_PROPERTIES, function(property) {
        delete revision[property];
      });
      return revision;
    }

    function saveCreatedRevisionId(id) {
      service.currentRevisionId = id;
      updateVehicleCurrentRevisionRef();
    }

    function updateVehicleCurrentRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(carInfoService.carInfo.MVA);
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
      carDamagesService.resetDamages();
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
