(function() {
  angular
    .module('budgetrentacar.services')
    .factory('RevisionService', RevisionService);

  RevisionService.$inject = [];

  function RevisionService(){
    var revision = {};

    var service = {
      setUsername : setUsername,
      setCarMVA : setCarMVA,
      setNewType : setNewType,
      setTimestamp : setTimestamp,
      setCarDeliveryInfo : setCarDeliveryInfo,
      setCarTires : setCarTires,
      setDamages : setDamages,
      setObservations : setObservations,
      setCarAccesories : setCarAccesories,
      setFeedback : setFeedback,
      getRevision : getRevision,
      resetRevision : resetRevision
    };
    return service;

    function setCarMVA(MVA) {
      revision.carMVA = MVA;
    }

    function setNewType(lastRevisionType) {
      (lastRevisionType == 'check-in') ? revision.type = 'check-out' : revision.type = 'check-in';
    }

    function setTimestamp() {
      revision.timestamp = Date.now();
    }

    function setUsername(username) {
      revision.username = username;
    }

    function setCarDeliveryInfo(deliveryInfo) {
      revision.km = deliveryInfo.km;
      revision.deliveryPlace = deliveryInfo.deliveryPlace;
      revision.gasLevel = deliveryInfo.gasLevel;
    }

    function setCarTires(tires) {
      revision.tires = tires;
    }

    function setDamages(damages) {
      revision.damages = damages;
    }

    function setObservations(observations){
      revision.observations = observations;
    }

    function setCarAccesories(accesories) {
      revision.carAccesories = accesories;
    }

    function setFeedback(feedback) {
      revision.feedback = feedback;
    }

    function getRevision() {
      return revision;
    }

    function resetRevision(){
      revision = {};
    }

  }

})();
