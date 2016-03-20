(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .factory('CarViewService', CarViewService);

  CarViewService.$inject = ['CarInfoFirebaseService',
                            'FIREBASE_URL',
                            'RevisionService'];

  function CarViewService(CarInfoFirebaseService,
                          FIREBASE_URL,
                          RevisionService) {

    var service = {
      observations: [],
      damages: [],
      addDamageToCanvasComponents: addDamageToCanvasComponents,
      setCanvasComponents: setCanvasComponents,
      pushObservations: pushObservations,
      pushObservationIdToCurrentRevision: pushObservationIdToCurrentRevision,
      resetObservationsAndDamages: resetObservationsAndDamages,
      pushCarViewData: pushCarViewData,
      rootRef: new Firebase(FIREBASE_URL)
    };
    return service;

    function setupObservationsToBePushed() {
      var observationsToPush = angular.copy(service.observations);
      removeIdProperty(observationsToPush);
      return observationsToPush;
    }

    function addDamageToCanvasComponents(damage) {
      service.damages.push(damage);
      console.log(service.damages);
    }

    function setupDamagesToBePushed() {
      var damagesToPush = angular.copy(service.damages);
      removeIdProperty(damagesToPush);
      return damagesToPush;
    }

    function pushObservations() {
      var reference = service.rootRef.child('observations');
      var pushRef = reference.push(setupObservationsToBePushed());
      pushObservationIdToCurrentRevision(pushRef.key());
    }

    function removeIdProperty(damages) {
      angular.forEach(damages, function(damage) {
        delete damage.shapeId;
      });
    }

    function resetObservationsAndDamages() {
      service.observations = [];
      service.damages = [];
    }

    function pushObservationIdToCurrentRevision(id) {
      var reference = service.rootRef
        .child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId);
      reference.update({
        observations: id
      });
    }

    function setCanvasComponents() {
      RevisionService.setDamages(setupDamagesToBePushed());
    }

    function pushCarViewData() {
      if (service.damages.length > 0) {
        RevisionService.setDamages(setupDamagesToBePushed());
        FirebaseRevisionService.pushDamages(setupDamagesToBePushed());
        resetObservationsAndDamages();
      }
    }
  }
})();
