(function() {
  'use strict';

  describe('ScannerService', function() {
    var ScannerService;

    beforeEach(module('ui.router'));
    beforeEach(module(function ($provide) {
        $provide.constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    }));

    beforeEach(function() {
      module(function($provide) {
        $provide.service('ScannerService', function() {
          return {'code': '123'};
        });
      });
    });

    beforeEach(inject(function(_ScannerService_) {
      ScannerService = _ScannerService_;
    }));

    it('is defined', function() {
        expect(ScannerService).toBeDefined();
    });

    it('should return code', function() {
        expect(ScannerService.code).toBe('123');
    });

  });

})();
