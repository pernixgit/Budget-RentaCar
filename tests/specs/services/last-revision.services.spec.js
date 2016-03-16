describe('LastRevisionService', function() {
  var LastRevisionService;
  var $q;
  var $scope;

  beforeEach(module('ui.router'));
  beforeEach(module('budgetrentacar.services'));
  beforeEach(module('firebase'));

  beforeEach(function() {
    module(function($provide) {
      $provide.value('CarInfoFirebaseService', {carInfo: {MVA: '12345'}});
      $provide.value('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
    });
  });

  beforeEach(inject(function(FIREBASE_URL, CarInfoFirebaseService, _LastRevisionService_) {
    LastRevisionService = _LastRevisionService_;
  }));

  it('should be defined', function() {
    expect(LastRevisionService).toBeDefined();
  });

  describe('When fetching data', function() {

    beforeEach(function() {

      spyOn(LastRevisionService, '_getCurrentCarLastRevision').and.callFake(function() {
        LastRevisionService.currentCarLastRevision = 'currentCarLastRevision';
        return {
          then: function(callback) {callback();}
        };
      });

      spyOn(LastRevisionService, '_getCurrentCarLastObservations').and.callFake(function() {
        LastRevisionService.currentCarLastObservations = 'currentCarLastObservations';
      });

      spyOn(LastRevisionService, '_getCurrentCarLastDamages').and.callFake(function() {
        LastRevisionService.currentCarLastDamages = 'currentCarLastDamages';
      });

      LastRevisionService.fetchData();
    });

    it('should fill currentCarLastRevision data', function() {
      expect(LastRevisionService.currentCarLastRevision).toBe('currentCarLastRevision');

    });

    it('should fill currentCarLastObservations data', function() {
      expect(LastRevisionService.currentCarLastObservations).toBe('currentCarLastObservations');

    });

    it('should fill currentCarLastDamages data', function() {
      expect(LastRevisionService.currentCarLastDamages).toBe('currentCarLastDamages');

    });

  });

});
