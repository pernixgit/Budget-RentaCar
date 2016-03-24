(function() {
  angular
    .module('budgetrentacar.services')
    .factory('LastRevisionService', LastRevisionService);

  LastRevisionService.$inject = ['FIREBASE_URL',
                                 'CarInfoFirebaseService',
                                 '$firebaseObject',
                                 '$firebaseArray',
                                 '$q'];

  function LastRevisionService(FIREBASE_URL,
                               CarInfoFirebaseService,
                               $firebaseObject,
                               $firebaseArray,
                               $q) {

    var service =  {
      rootRef: new Firebase(FIREBASE_URL),
      fetchRevisionData: fetchRevisionData,
      _getLastRevision: _getLastRevision,
      _getLastRevisionDamages: _getLastRevisionDamages,
      _getLastRevisionObservations: _getLastRevisionObservations,
      _getLastRevisionRef: _getLastRevisionRef,
      revision: null
    };
    return service;

    function fetchRevisionData() {
      if (CarInfoFirebaseService.carInfo.MVA) {
        return service._getLastRevision()
          .then(function(data) {
            if (data) {
              service.revision = data;
              return $q.all([service._getLastRevisionDamages(),
                service._getLastRevisionObservations()]);
            }
          });
      }
    }

    function _getLastRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(CarInfoFirebaseService.carInfo.MVA)
        .child('last_revision_ref');
      var lastRevisionRef = $firebaseObject(reference);
      return lastRevisionRef.$loaded()
        .then(function() {
          return lastRevisionRef.$value;
        });
    }

    function _getLastRevision() {
      return service._getLastRevisionRef()
        .then(function(last_revision_ref) {
          if (last_revision_ref) {
            var reference = service.rootRef
              .child('revisions')
              .child(last_revision_ref);
            var lastRevision = $firebaseObject(reference);
            return lastRevision.$loaded()
              .then(
                function() {
                return lastRevision;
              });
          }
        });
    }

    function _getLastRevisionDamages() {
      var damagesRef = service.revision.damages_ref;
      if (damagesRef) {
        var reference = service.rootRef
          .child('damages')
          .child(service.revision.damages_ref);
        var lastRevisionDamages = $firebaseArray(reference);
        return lastRevisionDamages.$loaded()
          .then(function() {
          service.revision.damages = lastRevisionDamages;
        });
      }
    }

    function _getLastRevisionObservations() {
      var observationsRef = service.revision.observations_ref;
      if (observationsRef) {
        var reference = service.rootRef
          .child('observations')
          .child(service.revision.observations_ref);
        var lastRevisionObservations = $firebaseArray(reference);
        return lastRevisionObservations.$loaded()
          .then(function() {
            lastRevisionObservations = lastRevisionObservations || [];
            service.revision.observations = lastRevisionObservations.map(
              function(observation) {
                return {value: observation.$value, isNew: false};
              });
          });
      }
    }
  }

})();
