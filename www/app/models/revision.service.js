(function() {
  'use strict';

  angular
    .module('budgetrentacar.models')
    .service('Revision', Revision);

  Revision.$inject = ['$firebaseObject'];

  /* @ngInject */
  function Revision($firebaseObject) {
    var _model = {
      revisionNumber: null,
      observationNumber: null,
      observations: {},
      revision: {},
      pushRevision: pushRevision,
      pushObservations: pushObservations

    };
    return _model;

    function pushObservations(data) {
      var ref = new Firebase('https://budget-test.firebaseio.com/observations/' + _model.observationNumber);
      ref.set(_model.observations);
    };

    function pushRevision(data) {
      var ref = new Firebase('https://budget-test.firebaseio.com/revisions' + _model.revisionNumber);
      ref.set(_model.revision);
    };

  }


})();
