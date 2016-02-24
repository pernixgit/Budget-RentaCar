(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .service('CarViewService', CarViewService);

  CarViewService.$inject = ['CarInfoFirebaseService', 'FIREBASE_URL'];

  function CarViewService(CarInfoFirebaseService, FIREBASE_URL) {

    this.observationsArray = [];
    this.pushObservations = pushObservations;
    this.pushObservationIdToCurrentRevision =
      pushObservationIdToCurrentRevision;
    this.resetObservations = resetObservations;

    var rootRef = new Firebase(FIREBASE_URL);

    return this;

    function pushObservations() {
      var reference = rootRef.child('observations');
      var pushingObservations = angular.copy(this.observationsArray);
      removeCircleIdProperty(pushingObservations);
      var pushRef = reference.push(pushingObservations);
      pushObservationIdToCurrentRevision(pushRef.key());
    }

    function removeCircleIdProperty(observations) {
      angular.forEach(observations, function(element) {
        delete element.circleID;
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
  }
})();
