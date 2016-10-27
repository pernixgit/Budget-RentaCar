(function() {
  'use strict';

  angular
    .module('app.car-damages')
    .factory('carDamagesService', carDamagesService);

  /* @ngInject */
  function carDamagesService(FIREBASE_URL,
                             revisionService) {

    var service = {
      damages: [],
      addDamageToCanvasComponents: addDamageToCanvasComponents,
      setCanvasComponents: setCanvasComponents,
      getDamages: getDamages,
      resetDamages: resetDamages,
      pushCarViewData: setDamagesToService,
      rootRef: new Firebase(FIREBASE_URL),
      damagesLoaded: false
    };

    return service;

    function addDamageToCanvasComponents(damage) {
      service.damages.push(damage);
    }

    function getDamages() {
      return service.damages;
    }

    function setupDamagesToBePushed() {
      var damagesToPush = angular.copy(service.damages);
      removeIdProperty(damagesToPush);
      return damagesToPush;
    }

    function removeIdProperty(damages) {
      angular.forEach(damages, function(damage) {
        delete damage.shapeId;
      });
    }

    function resetDamages() {
      service.damages = [];
      service.damagesLoaded = false;
    }

    function setCanvasComponents() {
      revisionService.setDamages(setupDamagesToBePushed());
    }

    function setDamagesToService() {
      if (service.damages.length > 0) {
        revisionService.setDamages(setupDamagesToBePushed);
        resetDamages();
      }
    }
  }
})();
