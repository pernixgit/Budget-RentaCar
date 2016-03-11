(function() {
  'use strict';

  describe('CarViewService', function() {
    var CarViewService;
    var CarInfoFirebaseService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.carInfo'));
    beforeEach(module('budgetrentacar.carView'));
    beforeEach(module(function ($provide) {
        $provide.constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    }));

    beforeEach(function() {
      module(function($provide) {
        $provide.service('CarInfoFirebaseService', function() {
          return {'currentRevisionId': '987654321'};
        });
      });
    });

    beforeEach(inject(function(_$firebaseObject_, $q, _CarInfoFirebaseService_, _CarViewService_) {
      CarViewService = _CarViewService_;
      CarInfoFirebaseService = _CarInfoFirebaseService_;
    }));

    it('is defined', function() {
        expect(CarViewService).toBeDefined();
      });
  });

})();