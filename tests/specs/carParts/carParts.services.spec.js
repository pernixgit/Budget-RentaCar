(function() {
  'use strict';

  describe('CarPartsService', function() {
    var CarPartsService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.carInfo'));
    beforeEach(module('budgetrentacar.carParts'));
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

    beforeEach(inject(function(_$firebaseObject_, _CarInfoFirebaseService_, _CarPartsService_) {
      CarPartsService = _CarPartsService_;
    }));

    it('is defined', function() {
      expect(CarPartsService).toBeDefined();
    });
  });

})();