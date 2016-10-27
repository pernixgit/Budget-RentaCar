(function() {
  'use strict';

  angular
    .module('app.observations')
    .controller('ObservationsCtrl', ObservationsCtrl);

  /* @ngInject */

  function ObservationsCtrl($ionicModal,
                            $scope,
                            $state,
                            lastRevisionService,
                            observationsService) {

    var vm = this;
    vm.showObservationsModal = showObservationsModal;
    vm.hideObservationsModal = hideObservationsModal;
    vm.addObservation = addObservation;
    vm.observationsService = observationsService;
    vm.shouldShowObservationsButton = shouldShowObservationsButton;
    vm.removeObservation = observationsService.removeObservation;
    vm.observationItem = {observation: null, is_new: true};
    vm.opened = false;

    activate();

    function activate() {
      createObservationsModal();
    }

    function createObservationsModal() {
      $ionicModal.fromTemplateUrl('app/observations/observations.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
    }

    function shouldShowObservationsButton() {
      return !(isLoginView() || isScannerErrorView() || isCarInfoView() || isScannerMenuView());
    }

    function isLoginView() {
      return ($state.current.name === 'login');
    }

    function isCarInfoView() {
      return ($state.current.name === 'car-info');
    }

    function isScannerErrorView() {
      return ($state.current.name === 'scanner-error');
    }

    function isScannerMenuView() {
      return ($state.current.name === 'scanner-menu');
    }

    function showObservationsModal() {
      var lastRevision = lastRevisionService.revision;
      if (!vm.opened && lastRevision && lastRevision.observations) {
        angular.forEach(lastRevision.observations, function(observation) {
          observationsService.addObservation(observation);
        });
        vm.opened = true;
      }
      $scope.modal.show();
    }

    function hideObservationsModal() {
      $scope.modal.hide();
    }

    function addObservation(observation) {
      if (observation.observation) {
        observationsService.addObservation(observation);
        vm.observationItem = emptyObservation();
      }
    }

    function emptyObservation() {
      return angular.copy({observation: null, is_new: true});
    }

  }

})();
