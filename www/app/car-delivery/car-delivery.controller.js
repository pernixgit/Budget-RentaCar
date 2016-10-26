(function() {
  'use.strict';

  angular
    .module('app.car-delivery')
    .controller('CarDeliveryCtrl', CarDeliveryCtrl);

  /* @ngInject */
  function CarDeliveryCtrl($state,
                           $ionicNavBarDelegate,
                           carDeliveryService,
                           revisionService,
                           lastRevisionService,
                           GAS_LEVELS,
                           GAS_LEVEL_SELECTED) {

    var vm = this;
    vm.goToTireRevision = goToTireRevision;

    activate();

    function activate() {
      $ionicNavBarDelegate.showBackButton(true);
      setDefaultValues();
      carDeliveryService.initDeliveryPlaces()
        .then(function() {
          vm.deliveryPlaces = carDeliveryService.deliveryPlaces;
          vm.deliveryInfo.deliveryPlaceSelected = carDeliveryService.deliveryPlaces[0];
        });
    }

    function setDefaultValues() {
      vm.km = getPreviousKm(lastRevisionService.revision);
      vm.gasLevels = GAS_LEVELS;
      vm.deliveryPlaces = {};
      vm.deliveryInfo = {};
      vm.deliveryInfo.gasLevelSelected = GAS_LEVEL_SELECTED;
    }

    function resetFields() {
      vm.deliveryInfo = {
        deliveryPlaceSelected: carDeliveryService.deliveryPlaces[0],
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
      revisionService.setCarDeliveryInfo(deliveryInfo);
      resetFields();
      $state.go('tire-revision');
    }
  }
})();
