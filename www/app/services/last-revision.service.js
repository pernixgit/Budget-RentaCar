(function() {
  angular
    .module('app.services')
    .factory('lastRevisionService', lastRevisionService);

  /* @ngInject */
  function lastRevisionService(FIREBASE_URL,
                               carInfoService,
                               revisionService,
                               $firebaseObject,
                               $firebaseArray,
                               $q,
                               $log) {

    var fetchDataDeferred = $q.defer();
    var service =  {
      rootRef: new Firebase(FIREBASE_URL),
      revision: {},
      fetchData: fetchData,
      reset: resetPromise
    };
    
    return service;

    function fetchData() {
      getRevisionReference()
        .then(getLastRevision)
        .then(getDamagesAndObservations)
        .catch(handleGetRevisionError)

      return fetchDataDeferred.promise;
    }

    function resetPromise() {
      fetchDataDeferred = $q.defer();
    }

    function getRevisionReference() {
      var reference = service.rootRef
        .child('vehicles')
        .child(carInfoService.carInfo.MVA)
        .child('last_revision_ref');
      
      var lastRevisionRef = $firebaseObject(reference);
      return lastRevisionRef.$loaded();
    }

    function getLastRevision(revisionRef) {
      if(!revisionRef.$value) { return Promise.reject(); }
      var reference = service.rootRef
        .child('revisions')
        .child(revisionRef.$value);
      var lastRevision = $firebaseObject(reference);
      return lastRevision.$loaded();
    }

    function getDamagesAndObservations(lastRevision) {
      revisionService.setRevision(lastRevision);
      service.revision = lastRevision;
      var promises = [getDamages(lastRevision.damages_ref), getObservations(lastRevision.observations_ref) ];
      return $q.all(promises)
        .then(handleGetDamagesAndObservationsSuccess)
        .catch(handleGetDamagesAndObservationsError)
    }

    function handleGetDamagesAndObservationsSuccess(resolvedPromises) {
      revisionService.setDamages(resolvedPromises[0]);
      revisionService.setObservations(resolvedPromises[1]);
      fetchDataDeferred.resolve(service.revision);
    }

    function handleGetDamagesAndObservationsError(error) {
      $log.error(error);
      fetchDataDeferred.reject();
    }

    function getDamages(damagesRef) {
      var reference = service.rootRef
        .child('damages')
        .child(damagesRef);
      var lastRevisionDamages = $firebaseArray(reference);
      return lastRevisionDamages.$loaded();
    }

    function getObservations(observationsRef) {
      var reference = service.rootRef
        .child('observations')
        .child(observationsRef);
      var lastRevisionObservations = $firebaseArray(reference);
      return lastRevisionObservations.$loaded();
    }

    function handleGetRevisionError(error) {
      fetchDataDeferred.reject();
      $log.error(error);
    }

    function handleGetRevisionRefSuccess(revisionRef) {
      return revisionRef;
    }

    function handleGetRevisionRefReject(error) {
      return Promise.reject(error);
     }

  }

})();
