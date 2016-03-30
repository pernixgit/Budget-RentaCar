(function() {
  'use strict';

  angular
    .module('budgetrentacar')
    .controller('ObservationsController', ObservationsController);

  ObservationsController.$inject = ['$ionicModal',
                                    '$scope',
                                    'RevisionService',
                                    '$state',
                                    'LastRevisionService'];

  function ObservationsController($ionicModal,
                                  $scope,
                                  RevisionService,
                                  $state,
                                  LastRevisionService) {
    var vm = this;
    vm.RevisionService = RevisionService;
    vm.showObservationsModal = showObservationsModal;
    vm.hideObservationsModal = hideObservationsModal;
    vm.addObservation = addObservation;
    vm.removeObservation = RevisionService.removeObservation;
    vm.observation = {value: null, isNew: true};
    vm.shouldShowObservationsButton = shouldShowObservationsButton;
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
      return !(isLoginView() || isScannerErrorView() || isCarInfoView());
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

    function showObservationsModal() {
      if (!vm.opened) {
        if (LastRevisionService.revision.observations){
          RevisionService.setObservations(
            LastRevisionService.revision.observations);
          vm.opened = true;
        }
      }
      $scope.modal.show();
    }

    function hideObservationsModal() {
      $scope.modal.hide();
    }

    function addObservation(observation) {
      RevisionService.addObservation(observation);
      vm.observation = emptyObservation();
    }

    function emptyObservation() {
      return angular.copy({value: null, isNew: true});
    }

  }

})();

