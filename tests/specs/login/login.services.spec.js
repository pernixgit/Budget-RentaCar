describe('Login Service', function() {

  var LoginFirebaseService, $scope;

  beforeEach(module('app.login'));
  beforeEach(module('firebase'));

  beforeEach(function () {
    module(function ($provide) {
      $provide.value('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
      $provide.value('$firebaseObject', {});
    });
  });

  beforeEach(inject(function (FIREBASE_URL, _LoginFirebaseService_) {
    LoginFirebaseService = _LoginFirebaseService_;
  }));

  it('should be defined', function () {
    expect(LoginFirebaseService).toBeDefined();
  });

  describe('When getting data from Firebase', function () {
    beforeEach(function () {

      spyOn(LoginFirebaseService, 'getUserInfo').and.callFake(function () {
        return {username: 'username', password: 'password'};
      });

      spyOn(LoginFirebaseService, 'getRevisionUsername');
      LoginFirebaseService.setUsername('username');

      expect(LoginFirebaseService.getRevisionUsername()).toBe('username');
      expect(LoginFirebaseService.getUserInfo()).toBe({username: 'username', password: 'password'});

    });

  });
});
