(function() {
  'use strict';

  describe('TireRevisionFirebaseService', function() {
    var TireRevisionFirebaseService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.carInfo'));
    beforeEach(module('budgetrentacar.tireRevision'));
    beforeEach(module(function ($provide) {
        $provide.constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    }));

    beforeEach(function() {
      module(function($provide) {
        $provide.service('CarInfoFirebaseService', function() {
          return {'currentRevisionId': '12345'};
        });
      });
    });

    beforeEach(inject(function(_$firebaseObject_, _CarInfoFirebaseService_, _TireRevisionFirebaseService_) {
      TireRevisionFirebaseService = _TireRevisionFirebaseService_;
    }));

    it('is defined', function() {
      expect(TireRevisionFirebaseService).toBeDefined();
    });
  });

})();