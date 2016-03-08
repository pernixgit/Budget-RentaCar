(function() {
  angular
    .module('budgetrentacar.services')
    .factory('LastRevisionService', LastRevisionService);

  LastRevisionService.$inject = ['FIREBASE_URL',
                                 'CarInfoFirebaseService',
                                 '$q'];

  function LastRevisionService(FIREBASE_URL,
                               CarInfoFirebaseService,
                               $q) {

    var currentCarMVA = CarInfoFirebaseService.carInfo.MVA;
    var root = FIREBASE_URL;

    var service =  {
      fetchData: fetchData,
      currentCarLastRevision: null,
      currentCarLastObservations: null,
      currentCarLastDamages: null,
      _getCurrentCarLastRevision: _getCurrentCarLastRevision,
      _getCurrentCarLastObservations: _getCurrentCarLastObservations,
      _getCurrentCarLastDamages: _getCurrentCarLastDamages
    };
    return service;

    function fetchData() {
      return service._getCurrentCarLastRevision().then(function() {
        return $q
          .all([service._getCurrentCarLastObservations(),
                service._getCurrentCarLastDamages()]);
      });
    }

    function _getCurrentCarLastRevision() {
      var ref = new Firebase(root.concat('/revisions'));
      return ref.orderByChild('car').equalTo(currentCarMVA).limitToLast(2)
        .once('value', function(snapshot) {
          service.currentCarLastRevision = _getFirstValue(snapshot.val());
        });
    }

    function _getFirstValue(object) {
      for (var key in object) {
        break;
      }
      return object[key];
    }

    function _getCurrentCarLastObservations() {
      var ref = new Firebase(root.concat('/observations'));
      if (service.currentCarLastRevision.observations) {
        return ref.child(service.currentCarLastRevision.observations)
          .once('value', function(snapshot) {
            service.currentCarLastObservations = snapshot.val();
          });
      }
    }

    function _getCurrentCarLastDamages() {
      var ref = new Firebase(root.concat('/damages'));
      if (service.currentCarLastRevision.damages) {
        return ref.child(service.currentCarLastRevision.damages)
          .once('value', function(snapshot) {
            service.currentCarLastDamages = snapshot.val();
          });
      }
    }

  }

})();
