(function() {
  'use strict';

  angular
    .module('budgetrentacar.observations')
    .controller('ObservationsCtrl', ObservationsCtrl);

  /* @ngInject */

  function ObservationsCtrl($ionicModal,
                            $scope,
                            $state,
                            LastRevisionService,
                            ObservationsService) {

    var vm = this;
    vm.showObservationsModal = showObservationsModal;
    vm.hideObservationsModal = hideObservationsModal;
    vm.addObservation = addObservation;
    vm.ObservationsService = ObservationsService;
    vm.removeObservation = ObservationsService.removeObservation;
    vm.observationItem = {observation: null, is_new: true};
    vm.shouldShowObservationsButton = shouldShowObservationsButton;
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
      return ($state.current.name === 'carInfo');
    }

    function isScannerErrorView() {
      return ($state.current.name === 'scanner-error');
    }

    function isScannerMenuView() {
      return ($state.current.name === 'scannerMenu');
    }

    function showObservationsModal() {
      var lastRevision = LastRevisionService.revision;
      if (!vm.opened && lastRevision && lastRevision.observations) {
        angular.forEach(lastRevision.observations, function(observation) {
          ObservationsService.addObservation(observation);
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
        ObservationsService.addObservation(observation);
        vm.observationItem = emptyObservation();
      }
    }

    function emptyObservation() {
      return angular.copy({observation: null, is_new: true});
    }

  }

})();
