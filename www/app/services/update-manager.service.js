(function(){
  'use strict';

  angular
    .module('app.services')
    .factory('updateManagerService', updateManagerService);

  function updateManagerService($ionicDeploy,
                                $ionicLoading) {
    
    var service = {
      downloadUpdates: downloadUpdates
    }

    return service;

    function downloadUpdates() {
      $ionicDeploy.channel = 'dev';
      
      $ionicDeploy.check()
        .then(function(snapshotAvailable) {
          if(snapshotAvailable) {
            $ionicLoading.show({ 
              template: 'Actualizando...'
            })
            .then(function() {
              $ionicDeploy.download()
                .then(extractUpdate)
                .then($ionicLoading.hide)
                .then(loadUpdate);
            });
          }
        });
    }

    function extractUpdate() { 
      return $ionicDeploy.extract(); 
    }

    function loadUpdate() {
      $ionicDeploy.load();
    }

  }

})();
