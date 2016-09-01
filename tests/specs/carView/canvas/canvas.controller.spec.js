describe('Canvas Controller', function() {
  var controller, $scope, CarViewService, $ionicPopup, LastRevisionService, CarInfoFirebaseService;

  beforeEach(module('ui.router'));
  beforeEach(module('budgetrentacar.carView'));
  beforeEach(function () {
    module(function ($provide) {
      $provide.value('DAMAGE_OPTIONS', {});
      $provide.value('DAMAGE_TYPE_SELECTED', {});
      $provide.value('PARTS', {});
      $provide.value('SELECTED_PART', {});
      $provide.value('VEHICLE_4X2_URL', {});
      $provide.value('VEHICLE_4X4_URL', {});
    });
  });
  beforeEach(inject(function($controller, $rootScope, DAMAGE_OPTIONS, DAMAGE_TYPE_SELECTED, PARTS,
                             SELECTED_PART, VEHICLE_4X2_URL, VEHICLE_4X4_URL){
    $scope = $rootScope.$new();
    $ionicPopup = jasmine.createSpyObj('$ionicPopup', ['confirm']);
    CarViewService = {
      damages: [],
      resetDamages: function(){ CarViewService.damages = [] },
      addDamageToCanvasComponents: function(damage){ CarViewService.damages.push(damage)}
    };

    LastRevisionService = {
      revision: {damages: []},
      fetchRevisionData: function(){}
    };

    CarInfoFirebaseService = {
      carInfo: {traction_type: '4x4'}
    };

    controller = $controller('CanvasController', {
      '$scope' : $scope,
      'CarViewService': CarViewService,
      '$ionicPopup' : $ionicPopup,
      'DAMAGE_OPTIONS' : DAMAGE_OPTIONS,
      'DAMAGE_TYPE_SELECTED' : DAMAGE_TYPE_SELECTED,
      'PARTS' : PARTS,
      'SELECTED_PART' : SELECTED_PART,
      'VEHICLE_4X2_URL' : VEHICLE_4X2_URL,
      'VEHICLE_4X4_URL' : VEHICLE_4X4_URL,
      'LastRevisionService' : LastRevisionService,
      'CarInfoFirebaseService' : CarInfoFirebaseService
    });
  }));

  it('Should create controller', function() {
    expect(controller).not.toBeUndefined();
  });

});
