(function() {
  'use strict';

  angular
    .module('app.services')
    .service('canvasService', canvasService);

  /* @ngInject */
  function canvasService() {

    var service = {
      changeDamagesColorToYellow: changeDamagesColorToYellow
    };

    return service;

    function changeDamagesColorToYellow(damages) {
      var yellowColor = '[1, 1, 0.5]';
      return damages.map(function(damage) {
        damage.json_canvas = damage.json_canvas.replace(/\[0.92941,0.33333,0.01961\]/g, yellowColor);
        damage.is_new = false;
        return damage;
      });
    }

  }
})();
