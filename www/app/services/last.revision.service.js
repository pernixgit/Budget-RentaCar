(function() {
  angular
    .module('budgetrentacar.services')
    .factory('LastRevisionService', LastRevisionService);

  LastRevisionService.$inject = ['FIREBASE_URL',
                                 'CarInfoFirebaseService',
                                 '$firebaseObject',
                                 '$q'];

  function LastRevisionService(FIREBASE_URL,
                               CarInfoFirebaseService,
                               $firebaseObject,
                               $q) {


    var service =  {
      rootRef: new Firebase(FIREBASE_URL),
      fetchRevisionData : fetchRevisionData,
      _getLastRevision : _getLastRevision,
      _getLastRevisionDamages : _getLastRevisionDamages,
      _getLastRevisionObservations : _getLastRevisionObservations,
      _getLastRevisionRef : _getLastRevisionRef,
      revision: null
    };
    return service;

    function fetchRevisionData() {
      if(CarInfoFirebaseService.carInfo.MVA) {
        return service._getLastRevision()
          .then(function (data) {
            service.revision = data;
            return $q.all([service._getLastRevisionObservations(),
              service._getLastRevisionDamages()]);
          });
      }
    }

    function _getLastRevisionRef() {
      var reference = service.rootRef
        .child('vehicles')
        .child(CarInfoFirebaseService.carInfo.MVA)
        .child('last_revision_ref');
      var firebaseObjectRef = $firebaseObject(reference);
      return firebaseObjectRef.$loaded()
        .then(function () {
          return firebaseObjectRef.$value;
        })
    }

    function _getLastRevision() {
      return service._getLastRevisionRef()
        .then(function(last_revision_ref){
          var reference = service.rootRef
            .child('revisions')
            .child(last_revision_ref);
          var object = $firebaseObject(reference);
          return object.$loaded().then(function(){
            return object;

          });
      });
    }

    function _getLastRevisionDamages() {
      var damagesRef = service.revision.damages_ref;
      if(damagesRef) {
        var reference = service.rootRef
          .child('damages')
          .child(service.revision.damages_ref);
        service.revision.damages = $firebaseObject(reference).$loaded();
      }
    }

    function _getLastRevisionObservations() {
      var observationsRef = service.revision.observations_ref;
      if(observationsRef) {
        var reference = service.rootRef
          .child('observations')
          .child(service.revision.observations_ref);
        service.revision.observations = $firebaseObject(reference).$loaded();
      }
    }
  }

})();
