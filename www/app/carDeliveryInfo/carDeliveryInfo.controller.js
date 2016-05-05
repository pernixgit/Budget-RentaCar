(function() {
  'use.strict';

  angular
    .module('budgetrentacar.carDeliveryInfo')
    .controller('CarDeliveryInfoController', CarDeliveryInfoController);

  /* @ngInject */

  function CarDeliveryInfoController($state,
                                     CarDeliveryInfoFirebaseService,
                                     CarInfoFirebaseService,
                                     RevisionService,
                                     LastRevisionService,
                                     GAS_LEVELS,
                                     DELIVERY_PLACE_SELECTED,
                                     GAS_LEVEL_SELECTED,
                                     DELIVERY_PLACES,
                                     $ionicNavBarDelegate) {
    var vm = this;
    vm.km = getPreviousKm(LastRevisionService.revision);
    vm.CarDeliveryInfoFirebaseService = CarDeliveryInfoFirebaseService;
    vm.goToTireRevision = goToTireRevision;
    vm.currentCarTraction = CarInfoFirebaseService.carInfo.traction;
    vm.gasLevels = GAS_LEVELS;
    vm.deliveryInfo = {};
    vm.deliveryInfo.deliveryPlaceSelected = DELIVERY_PLACE_SELECTED;
    vm.deliveryInfo.gasLevelSelected = GAS_LEVEL_SELECTED;
    vm.deliveryPlaces = DELIVERY_PLACES;

    $ionicNavBarDelegate.showBackButton(true);

    function resetFields() {
      vm.deliveryInfo = {
        deliveryPlaceSelected: DELIVERY_PLACE_SELECTED,
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
