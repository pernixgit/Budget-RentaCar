describe('carInfo Controller', function() {
  var $this, $controller, $ionicNavBarDelegate, $state, $scope, CarInfoFirebaseService, RevisionService, LastRevisionService;

  beforeEach(module('ui.router'));
  beforeEach(module('budgetrentacar.carInfo'));
  beforeEach(inject(function($controller, $rootScope, $q){

    $scope = $rootScope.$new();
    $state = jasmine.createSpyObj('$state', ['go']);
    $ionicNavBarDelegate = jasmine.createSpyObj('$ionicNavBarDelegate', ['showBackButton']);

    RevisionService = {
      setContractNumber: function(){},
      setNewType: function(){},
      getRevision: function(){ revision = {}; return revision; },
      setLicensePlate: function() {},
      setCarMVA: function() {},
    };

    LastRevisionService = {
      revision: {damages:[]},
      fetchRevisionData: function(){}
    };

    CarInfoFirebaseService = {
      carInfo: {},
      getCarInfo: function(license_plate, MVA, model){
        carInfo.license_plate = license_plate;
        carInfo.MVA = MVA;
        carInfo.model = model;

        return carInfo;
      }
    };

    $controller = $controller;
    CarInfoFirebaseService = CarInfoFirebaseService;
    $state = $state;
    RevisionService = RevisionService;
    LastRevisionService = LastRevisionService;
    $ionicNavBarDelegate = $ionicNavBarDelegate;
  }));

  beforeEach(function(){
    $this = $controller('CarInfoCtrl', {
      CarInfoFirebaseService: CarInfoFirebaseService,
      $state: $state,
      RevisionService: RevisionService,
      LastRevisionService: LastRevisionService,
      $ionicNavBarDelegate: $ionicNavBarDelegate,
      $scope: $scope
    })
  });

  it('Should create controller', function() {
    expect($this).not.toBeUndefined();
  });
});
