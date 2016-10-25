describe('Login Controller', function() {
  var controller, $ionicPopup, $state, LoginFirebaseService, RevisionService, $scope, $ionicNavBarDelegate;

  beforeEach(module('ui.router'));
  beforeEach(module('app.login'));
  beforeEach(inject(function($controller, $rootScope, $q){

    $scope = $rootScope.$new();
    $state = jasmine.createSpyObj('$state', ['go']);
    $ionicPopup = jasmine.createSpyObj('$ionicPopup', ['alert']);
    $ionicNavBarDelegate = jasmine.createSpyObj('$ionicNavBarDelegate', ['showBackButton']);

    LoginFirebaseService = {
      username: null,
      getRevisionUsername: function(username){ return LoginFirebaseService.username },
      getUserInfo : function(username){
        return $q.when({username : 'username', password : 'password'})
      }
    };

    RevisionService = {
      setUsername: function(username){ LoginFirebaseService.username = username },
    };

    controller = $controller('LoginController', {
      '$state' : $state,
      '$ionicPopup' : $ionicPopup,
      'LoginFirebaseService' : LoginFirebaseService,
      'RevisionService' : RevisionService,
      '$ionicNavBarDelegate' : $ionicNavBarDelegate,
      '$scope' : $scope
    });
  }));

  it('Should create controller', function() {
    expect(controller).not.toBeUndefined();
  });

  describe('When authenticate is executed', function() {
    it('Should change the state to scanner with right credentials', function() {

      controller.authenticate('username', 'password');
      $scope.$apply();
      expect($state.go).toHaveBeenCalledWith('scanner');
    });

    it('Should show popup with wrong credentials', function() {

      controller.authenticate('asf', 'password');
      $scope.$apply();
      expect($ionicPopup.alert).toHaveBeenCalledWith({
        title: ' Error de Autenticación',
        template: ' Autenticación Invalida'
      });
    });
  });

  describe('When username is set in LoginService', function () {
    it('Should get the username with getUsername', function() {

      controller.authenticate('username', 'password');
      $scope.$apply();
      expect(LoginFirebaseService.getRevisionUsername()).toBe('username');
    });
  });

});
