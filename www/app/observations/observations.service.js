(function() {
  'use strict';

  angular
    .module('budgetrentacar.observations')
    .factory('ObservationsService', ObservationsService);

  /* @ngInject */

  function ObservationsService(RevisionService) {

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
      service.damages = [];
    }

    function setObservationsToService() {
      if (service.observations.length > 0) {
        RevisionService.setObservations(service.observations);
        resetObservations();
      }
    }
  }
})();
