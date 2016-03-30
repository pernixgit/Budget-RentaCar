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
      pushObservations: pushObservations,
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
      var reference = service.rootRef
        .child('damages');
      var pushReference = reference.push(damages);
      pushDamagesIdToCurrentRevision(pushReference.key());
    }

    function extractValuesFromObservations(observations) {
      if (observations.length > 0){
        var result = observations.map(
          function(observation) {
            return observation.value;
          });
        return result;
      }
    }

    function pushObservations(observations) {
      var reference = service.rootRef
        .child('observations');
      var observationsValues = extractValuesFromObservations(observations);
      if (observationsValues){
        var pushReference = reference.push(observationsValues);
        pushObservationsIdToCurrentRevision(pushReference.key());
      }
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

