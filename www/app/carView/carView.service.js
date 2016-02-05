(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .service('CarViewService', CarViewService);

    CarViewService.$inject = ['CarInfoFirebaseService'];

    function CarViewService(CarInfoFirebaseService){
      
      this.observationsArray = [];
      this.pushObservations = pushObservations;
      this.pushObservationsIdToCurrentRevision = pushObservationsIdToCurrentRevision;
      this.resetObservations = resetObservations;
      
      var rootRef = new Firebase('https://budget-cr.firebaseio.com/');

      return this;

      function pushObservations(){
        var reference = rootRef.child('observations');
        var pushingObservations = angular.copy(this.observationsArray);
        removeCircleIdProperty(pushingObservations);
        var pushRef = reference.push(pushingObservations);
        pushObservationsIdToCurrentRevision(pushRef.key());
      }

      function removeCircleIdProperty(observations){
        angular.forEach(observations, function(element){
          delete element.circleID;
        });
      }

      function resetObservations(){
        this.observationsArray = [];
      }

      function pushObservationsIdToCurrentRevision(id){
        var reference = rootRef.child('revisions').child(CarInfoFirebaseService.currentRevisionId);
        reference.update({
          observations: id
        });
      }
    }
})();
