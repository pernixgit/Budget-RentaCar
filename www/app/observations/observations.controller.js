(function() {
  'use strict';

  angular
    .module('budgetrentacar.observations')
    .controller('ObservationsController', ObservationsController);

  ObservationsController.$inject = ['$ionicModal',
                                    '$scope',
                                    '$state',
                                    'LastRevisionService',
                                    'ObservationsService',
                                    'RevisionService'];

  function ObservationsController($ionicModal,
                                  $scope,
                                  $state,
                                  LastRevisionService,
                                  ObservationsService,
                                  RevisionService) {
    var vm = this;
    vm.ObservationsService = ObservationsService;
    vm.RevisionService = RevisionService;
    vm.showObservationsModal = showObservationsModal;
    vm.hideObservationsModal = hideObservationsModal;
    vm.addObservation = addObservation;
    vm.removeObservation = ObservationsService.removeObservation;
    vm.observationItem = {observation: null, is_new: true};
    vm.shouldShowObservationsButton = shouldShowObservationsButton;
    vm.opened = false;
    vm.$state = $state;

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
      return vm.$state.current.name === 'login';
    }

    function isCarInfoView() {
      return vm.$state.current.name === 'carInfo';
    }

    function isScannerErrorView() {
      return vm.$state.current.name === 'scanner-error';
    }

    function isScannerMenuView() {
      return vm.$state.current.name === 'scannerMenu';
    }

    function showObservationsModal() {
      var lastRevision = LastRevisionService.revision;
      if (!vm.opened) {
        if (lastRevision) {
          if (lastRevision.observations) {
            angular.forEach(lastRevision.observations, function(observation) {
              ObservationsService.addObservation(observation);
            });
            vm.opened = true;
          }
        }
      }
      $scope.modal.show();
    }

    function hideObservationsModal() {
      $scope.modal.hide();
    }

    function addObservation(observation) {
      if (observation.observation != null) {
        ObservationsService.addObservation(observation);
        vm.observationItem = emptyObservation();
      }
    }

    function emptyObservation() {
      return angular.copy({observation: null, is_new: true});
    }

  }

})();

