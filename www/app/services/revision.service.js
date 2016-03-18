(function() {
  angular
    .module('budgetrentacar.services')
    .factory('RevisionService', RevisionService);

  RevisionService.$inject = [];

  function RevisionService() {
    var revision = {};
    var observationsList = {};
    var damagesList = {};

    var service = {
      setUsername: setUsername,
      setCarMVA: setCarMVA,
      setNewType: setNewType,
      setTimestamp: setTimestamp,
      setCarDeliveryInfo: setCarDeliveryInfo,
      setCarTires: setCarTires,
      setDamages: setDamages,
      setObservations: setObservations,
      setCarAccesories: setCarParts,
      setFeedback: setFeedback,
      getRevision: getRevision,
      getDamages: getDamages,
      resetRevision: resetRevision,
    };
    return service;

    function setCarMVA(MVA) {
      revision.vehicle_ref = MVA;
    }

    function setNewType(lastRevisionType) {
      (lastRevisionType == 'check-in') ?
      revision.type = 'check-out' : revision.type = 'check-in';
    }

    function setTimestamp() {
      revision.timestamp = Date.now();
    }

    function setUsername(username) {
      revision.user = username;
    }

    function setCarDeliveryInfo(deliveryInfo) {
      revision.km = deliveryInfo.km;
      revision.delivery_place = deliveryInfo.deliveryPlace;
      revision.gas_level = deliveryInfo.gasLevel;
    }

    function setCarTires(tires) {
      revision.tires = tires;
    }

    function setDamages(damages) {
      damagesList = damages;
    }

    function setObservations(observations) {
      observationsList = observations;
    }

    function setCarParts(carParts) {
      revision.car_parts_present = carParts;
    }

    function setFeedback(feedback) {
      revision.feedback = feedback;
    }

    function getRevision() {
      return revision;
    }

    function getDamages() {
      return damagesList;
    }

    function resetRevision() {
      revision = {};
      damagesList = {};
      observationsList = {};
    }

  }
})();
