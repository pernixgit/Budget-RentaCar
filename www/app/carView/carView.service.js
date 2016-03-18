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
      canvasComponents: [],
      addDamageToCanvasComponents: addDamageToCanvasComponents,
      setCanvasComponents: setCanvasComponents,
      pushObservations: pushObservations,
      pushObservationIdToCurrentRevision: pushObservationIdToCurrentRevision,
      resetObservations: resetObservationsAndDamages,
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
      service.canvasComponents.push(damage);
    }

    function setupDamagesToBePushed() {
      var damagesToPush = angular.copy(service.canvasComponents);
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
      service.canvasComponents = [];
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
      if (service.canvasComponents.length > 0) {
        RevisionService.setDamages(setupDamagesToBePushed());
        FirebaseRevisionService.pushDamages(setupDamagesToBePushed());
        resetObservationsAndDamages();
      }
    }
  }
})();
