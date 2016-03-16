describe('Login Controller', function() { 
  var ctrl, scope, ionicPopupMock, stateMock;

  beforeEach(module('ui.router'));
  beforeEach(module('budgetrentacar.login'));
  beforeEach(inject(function($controller, $rootScope){
    
    scope = $rootScope.$new();
    stateMock = jasmine.createSpyObj('$state spy', ['go']);
    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);
    loginFirebaseServiceMock = jasmine.createSpyObj('LoginFirebaseService spy', ['setupFirebaseRef']);

     ctrl = $controller('LoginController', {
      $scope: scope,
      $ionicPopup: ionicPopupMock,
      $state: stateMock,
      LoginFirebaseService: loginFirebaseServiceMock
    });
     
  }));

  it('should create controller', function() {
      expect(ctrl).not.toBeUndefined();
  }); 
});
