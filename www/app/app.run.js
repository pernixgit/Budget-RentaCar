(function() {
  'use strict';

  angular
    .module('budgetrentacar')
    .run(run);

  /* @ngInject */
  function run($ionicPlatform, $ionicDeploy) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      $ionicDeploy.channel = 'dev';
      $ionicDeploy.check().then(function(snapshotAvailable) {
        if(snapshotAvailable) {
          $ionicDeploy.download()
            .then(function() {
              return $ionicDeploy.extract()
            })
            .then(function () {
              $ionicDeploy.load();
            });
        }
      });

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }

})();
