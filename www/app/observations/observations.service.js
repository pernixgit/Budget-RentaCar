(function() {
  'use strict';

  angular
    .module('app.observations')
    .factory('observationsService', observationsService);

  /* @ngInject */
  function observationsService(revisionService) {

    var service = {
      observations: [],
      addObservation: addObservation,
      resetObservations: resetObservations,
      getObservations: getObservations,
      setObservationsToService: setObservationsToService,
      removeObservation: removeObservation
    };
    return service;

    function removeObservation(observation) {
      var observationIndex = service.observations.indexOf(observation);
      service.observations.splice(observationIndex, 1);
    }

    function getObservations() {
      return service.observations;
    }

    function addObservation(observation) {
      service.observations.push(observation);
    }

    function resetObservations() {
      service.observations = [];
    }

    function setObservationsToService() {
      revisionService.setObservations(service.observations);
      resetObservations();
    }

  }
})();
