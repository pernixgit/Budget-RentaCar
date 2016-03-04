(function() {
  'use strict';

  describe('LoginFirebaseService', function() {
    var LoginFirebaseService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.login'));
    beforeEach(module(function ($provide) {
        $provide.constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    }));

    /*beforeEach(function() {
      module(function($provide) {
        $provide.service('LoginFirebaseService', function() {
          return {'username': 'xu'};
        });
      });
    });*/

    beforeEach(inject(function(_$firebaseObject_, _LoginFirebaseService_) {
      LoginFirebaseService = _LoginFirebaseService_;
    }));

    it('is defined', function() {
        expect(LoginFirebaseService).toBeDefined();
      });
    /*it('fills new revision data ', function() {
      LoginFirebaseService.firebaseRef = null;
      LoginFirebaseService.setupFirebaseRef(LoginFirebaseService.username);
      expect(LoginFirebaseService.firebaseRef).toBe(FIREBASE_URL + '/users/xu');
    });    */

  });

})();