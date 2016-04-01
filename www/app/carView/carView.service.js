(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .factory('CarViewService', CarViewService);

  CarViewService.$inject = ['FIREBASE_URL',
                            'RevisionService'];

  function CarViewService(FIREBASE_URL,
                          RevisionService) {

    var service = {
      damages: [],
      addDamageToCanvasComponents: addDamageToCanvasComponents,
      setCanvasComponents: setCanvasComponents,
      resetDamages: resetDamages,
      pushCarViewData: setDamagesToService,
      rootRef: new Firebase(FIREBASE_URL),
      damagesLoaded: false
    };
    return service;

    function addDamageToCanvasComponents(damage) {
      service.damages.push(damage);
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
    }

    function setCanvasComponents() {
      RevisionService.setDamages(setupDamagesToBePushed());
    }

    function setDamagesToService() {
      if (service.damages.length > 0) {
        RevisionService.setDamages(setupDamagesToBePushed());
        FirebaseRevisionService.pushDamages(setupDamagesToBePushed());
        resetDamages();
      }
    }
  }
})();
