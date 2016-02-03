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
      
      var rootRef = new Firebase('https://budget-test.firebaseio.com');

      return this;

      function pushObservations(){
        var reference = rootRef.child('observations');
        var pushRef = reference.push(angular.copy(this.observationsArray));
        pushObservationsIdToCurrentRevision(pushRef.key());
      }

        function pushObservationsIdToCurrentRevision(id){
          var reference = rootRef.child('revisions').child(CarInfoFirebaseService.currentRevisionId);
          reference.update({
            observations: id
          });
        }
      }
})();
