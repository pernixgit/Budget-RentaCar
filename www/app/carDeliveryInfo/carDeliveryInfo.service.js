(function() {
  'use strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .service('CarDeliveryInfoService', CarDeliveryInfoService);

  /* @ngInject */

  function CarDeliveryInfoService(FIREBASE_URL, $q, $firebaseArray) {

    var rootRef = firebase.database().ref();
    var service = {
      initDeliveryPlaces: initDeliveryPlaces,
      deliveryPlaces: {}
    };

    return service;

    function getDeliveryPlaces() {
      var reference = rootRef
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
