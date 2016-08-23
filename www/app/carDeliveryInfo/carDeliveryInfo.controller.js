(function() {
  'use.strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .controller('CarDeliveryInfoCtrl', CarDeliveryInfoCtrl);

  /* @ngInject */

  function CarDeliveryInfoCtrl($state,
                               CarDeliveryInfoService,
                               RevisionService,
                               LastRevisionService,
                               GAS_LEVELS,
                               GAS_LEVEL_SELECTED,
                               $ionicNavBarDelegate) {
    var vm = this;
    vm.km = getPreviousKm(LastRevisionService.revision);
    vm.goToTireRevision = goToTireRevision;
    vm.gasLevels = GAS_LEVELS;
    vm.deliveryPlaces = {};
    vm.deliveryInfo = {};
    vm.deliveryInfo.gasLevelSelected = GAS_LEVEL_SELECTED;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(true);
      CarDeliveryInfoService.initDeliveryPlaces()
        .then(function() {
          vm.deliveryPlaces = CarDeliveryInfoService.deliveryPlaces;
          vm.deliveryInfo.deliveryPlaceSelected = CarDeliveryInfoService.deliveryPlaces[0];
        });
    }
    function resetFields() {
      vm.deliveryInfo = {
        deliveryPlaceSelected: CarDeliveryInfoService.deliveryPlaces[0],
        gasLevelSelected: GAS_LEVEL_SELECTED
      };
      vm.km = 0;
    }

    function createDeliveryInfoObject(km, deliveryPlace, gasLevel) {
      return {
        'km': km,
        'delivery_place': deliveryPlace,
        'gas_level': gasLevel
      };
    }

    function getPreviousKm(lastRevision) {
      return (lastRevision) ? lastRevision.km : 0;
    }

    function goToTireRevision() {
      var deliveryInfo = createDeliveryInfoObject(vm.km,
                                                  vm.deliveryInfo.deliveryPlaceSelected.name,
                                                  vm.deliveryInfo.gasLevelSelected.name);
      RevisionService.setCarDeliveryInfo(deliveryInfo);
      resetFields();
      $state.go('tireRevision');
    }
  }
})();
