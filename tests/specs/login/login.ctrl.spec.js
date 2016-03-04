describe('Login Controller', function() { 
  var ctrl, scope, ionicPopupMock, stateMock;

  beforeEach(module('ui.router'));
  beforeEach(module('budgetrentacar.login'));

  beforeEach(module(function ($provide) {
        $provide.constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    }));
  
  beforeEach(function() {
      module(function($provide) {
        $provide.service('LoginFirebaseService', function() {
          return {'username': 'admin'};
        });
      });
    });

  beforeEach(inject(function($controller, $rootScope){
    
    scope = $rootScope.$new();
    stateMock = jasmine.createSpyObj('$state spy', ['go']);
    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

     ctrl = $controller('LoginController', {
      $scope: scope,
      $ionicPopup: ionicPopupMock,
      $state: stateMock,
    });
     
  }));

  it('should create controller', function() {
      expect(ctrl).not.toBeUndefined();
  }); 
});
