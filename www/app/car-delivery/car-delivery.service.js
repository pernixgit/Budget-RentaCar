(function() {
  'use strict';

  angular
    .module('app.car-delivery')
    .service('carDeliveryService', carDeliveryService);

  /* @ngInject */
  function carDeliveryService(FIREBASE_URL,
                              $q, 
                              $firebaseArray) {

    var service = {
      rootRef: new Firebase(FIREBASE_URL),
      initDeliveryPlaces: initDeliveryPlaces,
      deliveryPlaces: {}
    };

    return service;

    function getDeliveryPlaces() {
      var reference = service.rootRef
        .child('delivery_places');
      var deliveryPlaces = $firebaseArray(reference);
      return deliveryPlaces.$loaded();
    }

    function initDeliveryPlaces() {
      var deferred = $q.defer();
      getDeliveryPlaces()
        .then(function(deliveryPlaces) {
          service.deliveryPlaces = deliveryPlaces;
          deferred.resolve();
        });
      return deferred.promise;
    }
  }
})();
