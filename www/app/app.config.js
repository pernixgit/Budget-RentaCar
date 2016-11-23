(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($ionicCloudProvider, 
                  $ionicConfigProvider) {

    $ionicCloudProvider.init({
      "core": {
        "app_id": "be75c74a"
      }
    });

    $ionicConfigProvider.backButton.previousTitleText(false).text('');
  }
})();
