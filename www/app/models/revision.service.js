(function() {
  'use strict';

  angular
    .module('budgetrentacar.models')
    .service('Revision', Revision);

  Revision.$inject = [];

  /* @ngInject */
  function Revision() {
    var _model = {
      data: {
        observations: null,
        revisions :null
      }

    };
    return _model;

  }

})();
