describe('carInfo Controller', function() {
  var controller, CarInfoFirebaseService, $state, RevisionService, LastRevisionService, $ionicNavBarDelegate;

  beforeEach(module('ui.router'));
  beforeEach()
  beforeEach(module('budgetrentacar.carInfo'));
  beforeEach(inject(function($controller, $state)

  LastRevisionService = {
    revision: {damages:[]},
    fetchRevisionData: function(){}
  };

  CarInfoFirebaseService = {
    carInfo: {traction_type: '4x4'}
  };

  controller = $controller('CarInfoCtrl',  {
    '$state' : $scope,
    'RevisionService' : RevisionService,
    '$ionicNavBarDelegate' : $ionicNavBarDelegate,
    'LastRevisionService' : LastRevisionService,
    'CarInfoFirebaseService' : CarInfoFirebaseService
  });

  it('Should create controller', function() {
    expect(controller).not.toBeUndefined();
  });

});
