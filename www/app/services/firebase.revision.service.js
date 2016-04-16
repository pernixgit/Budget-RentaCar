(function() {
  'use strict';

  angular
    .module('budgetrentacar.services')
    .service('FirebaseRevisionService', FirebaseRevisionService);

  FirebaseRevisionService.$inject = ['CarInfoFirebaseService',
                                     'FIREBASE_URL',
                                     'CarViewService',
                                     'RevisionService',
                                     'ObservationsService'];

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

    function pushNewRevision(newRevision, isCheckIn) {
      RevisionService.setTimestamp();
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
      damages = changeDamagesColorToYellow(damages);
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

    function changeDamagesColorToYellow(damages) {
      var yellowColor = '[1, 0.99, 0]';
      return damages.map(function(damage) {
        damage.json_canvas = damage.json_canvas.replace(/\[0.92941,0.33333,0.01961\]/g, yellowColor);
        return damage;
      });
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
