describe ('CarInfoFirebaseService', function(){

  var CarInfoFirebaseService;

  beforeEach(module('budgetrentacar.services'));
  beforeEach(module('firebase'));

  beforeEach(function () {
    module(function ($provide) {
      $provide.value('FIREBASE_URL', 'https://budget-cr.firebaseio.com');
      $provide.value('$firebaseObject', {});
      
    });
  });

  beforeEach(inject(function(_CarInfoFirebaseService_,FIREBASE_URL) {
    CarInfoFirebaseService = _CarInfoFirebaseService_;
  }));

  it('Should be define', function() {
    expect(CarInfoFirebaseService).toBeDefined();
  });
});
