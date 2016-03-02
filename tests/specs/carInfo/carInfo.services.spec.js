(function() {
  'use strict';

  describe('CarInfoFirebaseService', function() {
    var CarInfoFirebaseService;
    var LoginFirebaseService;

    beforeEach(module('ui.router'));
    beforeEach(module('firebase'));
    beforeEach(module('budgetrentacar.scanner'));
    beforeEach(module('budgetrentacar.carInfo'));
    beforeEach(module('budgetrentacar.login'));

    beforeEach(function() {
      module(function($provide) {
        $provide.service('LoginFirebaseService', function() {
          return {'username': 'foo'};
        });
      });
    });

    beforeEach(inject(function(_$firebaseObject_, $q, _LoginFirebaseService_, _CarInfoFirebaseService_, _ScannerService_) {
      CarInfoFirebaseService = _CarInfoFirebaseService_;
      LoginFirebaseService = _LoginFirebaseService_;
    }));

    it('is defined', function() {
        expect(CarInfoFirebaseService).toBeDefined();
      });

    it('fills new revision data ', function() {
      CarInfoFirebaseService.newRevision = {};
      CarInfoFirebaseService.carInfo = {
        type: 'check-in'
      };
      CarInfoFirebaseService.fillNewRevisionData();
      expect(Object.keys(CarInfoFirebaseService.newRevision).length).toEqual(4);

    });

    describe('New revision filled', function() {

      beforeEach(function() {
        CarInfoFirebaseService.newRevision = {};
        CarInfoFirebaseService.carInfo = {
          currentRevisionType: 'check-in',
          $id: '54321'
        };

        CarInfoFirebaseService.fillNewRevisionData();

      });

      it('has a type depending on fetched car type', function() {

        expect(CarInfoFirebaseService.newRevision.type).toBe('check-out');

      });

      it('has a timestamp', function() {
        expect(CarInfoFirebaseService.newRevision.timestamp).toBeTruthy();

      });

      it('has the current logged user username', function() {
        expect(CarInfoFirebaseService.newRevision.username).toBe('foo');

      });

      it('has car id', function() {
        expect(CarInfoFirebaseService.newRevision.car).toBe('54321');

      });

    });

  });

})();
