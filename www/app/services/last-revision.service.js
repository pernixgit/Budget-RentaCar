(function(){
  angular
    .module('budgetrentacar.services')
    .factory('LastRevisionService', LastRevisionService);

  LastRevisionService.$inject = ['FIREBASE_URL', 'CarInfoFirebaseService'];

  function LastRevisionService(FIREBASE_URL, CarInfoFirebaseService) {
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
        service._getCurrentCarLastObservations();
        service._getCurrentCarLastDamages();
      });
    }

    function _getCurrentCarLastRevision() {
      var ref = new Firebase(root.concat('/revisions'));
      return ref.orderByChild('car').equalTo(currentCarMVA).limitToLast(1)
        .once('value', function(snapshot) {
          service.currentCarLastRevision = _getFirstValue(snapshot.val());
        });
    }

    function _getFirstValue(object) {
      for (var key in object) break;
      return object[key];
    }

    function _getCurrentCarLastObservations() {
      var ref = new Firebase(root.concat('/observations'));
      ref.child(service.currentCarLastRevision.observations)
        .once('value', function(snapshot) {
          service.currentCarLastObservations = snapshot;
        });
    }

    function _getCurrentCarLastDamages() {
      var ref = new Firebase(root.concat('/damages'));
      ref.child(service.currentCarLastRevision.damages)
        .once('value', function(snapshot) {
          service.currentCarLastDamages = snapshot;
        });
    }

  }

})();
