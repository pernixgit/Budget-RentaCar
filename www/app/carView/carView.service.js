(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .service('CarViewService', CarViewService);

  CarViewService.$inject = ['CarInfoFirebaseService', 'FIREBASE_URL'];

  function CarViewService(CarInfoFirebaseService, FIREBASE_URL) {
    var service = this;

    service.observationsArray = [];
    service.pushObservations = pushObservations;
    service.pushObservationIdToCurrentRevision =
      pushObservationIdToCurrentRevision;
    service.resetObservations = resetObservations;
    service.pushJsonCanvas = pushJsonCanvas;
    service.pushCarViewData = pushCarViewData;
    service.getDamages = getDamages;
    service.canvasComponents = [];

    var rootRef = new Firebase(FIREBASE_URL);

    function setupObservationsToBePushed() {
      var observationsToPush = angular.copy(service.observationsArray);
      removeCircleIdProperty(observationsToPush);
      return observationsToPush;
    }

    function pushObservations() {
      var reference = rootRef.child('observations');
      var pushRef = reference.push(setupObservationsToBePushed());
      pushObservationIdToCurrentRevision(pushRef.key());
    }

    function removeCircleIdProperty(observations) {
      angular.forEach(observations, function(element) {
        delete element.shapeId;
      });
    }

    function resetObservations() {
      this.observationsArray = [];
    }

    function pushObservationIdToCurrentRevision(id) {
      var reference = rootRef
        .child('revisions')
        .child(CarInfoFirebaseService.currentRevisionId);
      reference.update({
        observations: id
      });
    }

    function pushJsonCanvas(json) {
      var reference = rootRef
        .child('damages')
      reference.push(json);
    }

    function getDamages(){
      return rootRef
        .child('damages')
        .child('-KBtOI2stnQcOmFLvkQI')
        .once("value")
    }

    function pushCarViewData() {
      //pushObservations();
      //resetObservations();
      pushJsonCanvas(service.canvasComponents);
    }
  }
})();
