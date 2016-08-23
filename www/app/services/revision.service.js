(function() {
  angular
    .module('budgetrentacar.services')
    .factory('RevisionService', RevisionService);

  /* @ngInject */

  function RevisionService() {
    var revision = {};
    var observationsList = [];
    var damagesList = {};
    var feedback = {};
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
      setLicensePlate: setLicensePlate,
      setContractNumber: setContractNumber,
      getContractNumber: getContractNumber,
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

    function setTimestamp(timestamp) {
      revision.timestamp = timestamp;
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

    function setCarParts(carParts, countedCarParts) {
      revision.car_parts_present = carParts;
      revision.car_parts_present.emblems = countedCarParts.emblems;
      revision.car_parts_present.plates = countedCarParts.plates;
    }

    function setFeedback(userFeedback) {
      feedback = userFeedback;
    }

    function getFeedback() {
      return feedback;
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

    function setLicensePlate(licensePlate) {
      revision.license_plate = licensePlate;
    }

    function setContractNumber(contractNumber) {
      revision.contract_number = contractNumber;
    }

    function getContractNumber() {
      return revision.contract_number;
    }

    function resetRevision() {
      revision = {};
      damagesList = {};
      observationsList = [];
    }
  }
})();
