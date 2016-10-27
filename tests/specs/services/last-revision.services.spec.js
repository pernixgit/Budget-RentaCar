describe('LastRevisionService', function() {
  var LastRevisionService;

  beforeEach(module('ui.router'));
  beforeEach(module('app.services'));
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

      spyOn(LastRevisionService, '_getLastRevision').and.callFake(function() {
        LastRevisionService.revision = {};
        return {
          then: function(callback) {callback({revision: 'revision'});}
        };
      });

      spyOn(LastRevisionService, '_getLastRevisionDamages').and.callFake(function() {
        LastRevisionService.revision.damages = 'damages';
      });

      spyOn(LastRevisionService, '_getLastRevisionObservations').and.callFake(function() {
        LastRevisionService.revision.observations = 'observations';
      });

      LastRevisionService.fetchRevisionData();
    });

    it('should fill currentCarLastRevision data', function() {
      expect(LastRevisionService.revision).toEqual({
        revision: 'revision',
        damages: 'damages',
        observations: 'observations'
      });

    });

    it('should fill currentCarLastObservations data', function() {
      expect(LastRevisionService.revision.observations).toBe('observations');

    });

    it('should fill currentCarLastDamages data', function() {
      expect(LastRevisionService.revision.damages).toBe('damages');

    });

  });

});
