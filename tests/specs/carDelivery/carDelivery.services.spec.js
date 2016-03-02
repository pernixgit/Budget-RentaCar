(function() {
  'use strict';

  describe('CarDeliveryInfoFirebaseService', function() {
    var CarDeliveryInfoFirebaseService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.scanner'));
    beforeEach(module('budgetrentacar.carInfo'));
    beforeEach(module('budgetrentacar.login'));
    beforeEach(module('budgetrentacar.carDeliveryInfo'));

    beforeEach(function() {
      module(function($provide) {
        $provide.service('CarInfoFirebaseService', function() {
          return {'currentRevisionId': '12345'};
        });
      });
    });

    beforeEach(inject(function(_$firebaseObject_, _CarInfoFirebaseService_, _CarDeliveryInfoFirebaseService_) {
      CarDeliveryInfoFirebaseService = _CarDeliveryInfoFirebaseService_;
    }));

    it('is defined', function() {
      expect(CarDeliveryInfoFirebaseService).toBeDefined();
    });
  });

})();