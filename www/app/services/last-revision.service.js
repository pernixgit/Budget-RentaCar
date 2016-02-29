(function(){
  angular
    .module('budgetrentacar')
    .factory('LastRevisionService', LastRevisionService);

  LastRevisionService.$inject = ['FIREBASE_URL', '$firebaseObject', 'CarInfoFirebaseService'];

  function LastRevisionService(FIREBASE_URL, $firebaseObject, CarInfoFirebaseService){
    var currentCarMVA = CarInfoFirebaseService.carInfo.MVA;
    var root = FIREBASE_URL;

    var service =  {
      getCurrentCarLastRevision: getCurrentCarLastRevision,
      getCurrentCarLastObservations: getCurrentCarLastObservations,
      currentCarLastRevision: null,
      currentCarLastObservations: null
    };
    
    return service;

    function getCurrentCarLastRevision(){
      var ref = new Firebase(root.concat('/revisions'));
      return ref.orderByChild('car').equalTo(currentCarMVA).limitToLast(1)
        .once('value', function(snapshot) {
          service.currentCarLastRevision = getFirstValue(snapshot.val());
        });
    }

    function getFirstValue(object){
      for (var key in object) break;
      return object[key];
    }

    function getCurrentCarLastObservations(){
      var ref = new Firebase(root.concat('/observations'));
      ref.child(service.currentCarLastRevision.observations)
        .once('value', function(snapshot) {
          service.currentCarLastObservations = snapshot;
        });
    }


  }

})();
