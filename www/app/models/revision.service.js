(function() {
  'use strict';

  angular
    .module('budgetrentacar.models')
    .service('Revision', Revision);

  Revision.$inject = ['$firebaseObject'];

  /* @ngInject */
  function Revision($firebaseObject) {
    var _model = {
      data: {
        observations: null,
        revisions :null
      },
      pushData: pushData

    };
    return _model;


    function pushData(data) {
      var ref = new Firebase('https://budget-test.firebaseio.com');
      ref.set(_model.data);
    };

  }


})();
