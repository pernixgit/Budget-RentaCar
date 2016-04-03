(function() {
  angular
    .module('budgetrentacar.services')
    .factory('RevisionService', RevisionService);

  RevisionService.$inject = [];

  function RevisionService() {
    var revision = {};
    var observationsList = [];
    var damagesList = {};

    var service = {
      setUsername: setUsername,
      setCarMVA: setCarMVA,
      setNewType: setNewType,
      setTimestamp: setTimestamp,
      setCarDeliveryInfo: setCarDeliveryInfo,
      setCarTires: setCarTires,
      setDamages: setDamages,
      addObservation: addObservation,
      setObservations: setObservations,
      removeObservation: removeObservation,
      setCarAccesories: setCarParts,
      setFeedback: setFeedback,
      getFeedback: getFeedback,
      getRevision: getRevision,
      getDamages: getDamages,
      getObservations: getObservations,
      setCanvasImage: setCanvasImage,
      resetRevision: resetRevision
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
      revision.username = username;
    }

    function setCarDeliveryInfo(deliveryInfo) {
      revision.km = deliveryInfo.km;
      revision.delivery_place = deliveryInfo.delivery_place;
      revision.gas_level = deliveryInfo.gas_level;
    }

    function setCarTires(tires) {
      revision.tires = tires;
    }

    function setDamages(damages) {
      damagesList = damages;
    }

    function addObservation(observation) {
      observationsList.push(observation);
    }

    function setObservations(observations) {
      observationsList = (observations);
    }

    function removeObservation(observation) {
      var observationIndex = observationsList.indexOf(observation);
      observationsList.splice(observationIndex, 1);
    }

    function setCarParts(carParts) {
      revision.car_parts_present = carParts;
    }

    function setFeedback(feedback) {
      revision.feedback = feedback;
    }

    function getFeedback() {
      return revision.feedback;
    }

    function getRevision() {
      return revision;
    }

    function getDamages() {
      return damagesList;
    }

    function getObservations() {
      return observationsList;
    }

    function setCanvasImage(canvasImage) {
      revision.canvas_image = canvasImage;
    }

    function resetRevision() {
      revision = {};
      damagesList = {};
      observationsList = [];
    }

  }
})();
