describe('RevisionService', function() {

  var RevisionService;

  beforeEach(module('budgetrentacar.services'));
  beforeEach(inject(function (_RevisionService_) {
    RevisionService = _RevisionService_;
  }));

  it('Should set the username to revision object', function() {
    RevisionService.setUsername('Luis');
    expect(RevisionService.getRevision().username).toBe('Luis');
  });

  it('Should get revision object', function() {
    RevisionService.setUsername('Luis');
    var revision = RevisionService.getRevision();
    expect(revision).toEqual({username: 'Luis'});
  });

  it('Should set the type to revision object depending on last Revision type', function() {
    var lastRevisionType = 'check-in';
    RevisionService.setNewType(lastRevisionType);
    expect(RevisionService.getRevision().type).toBe('check-out');
  });

  it('Should set the timestamp to revision object', function() {
    RevisionService.setTimestamp();
    expect(typeof(RevisionService.getRevision().timestamp)).toBe('number');
  });


  it('Should set carMVA to revisionObject carMVA', function() {
    RevisionService.setCarMVA('12345');
    expect(RevisionService.getRevision().carMVA).toBe('12345');
  });

  it('Should set the carDeliveryInfo to revision object', function () {
    var deliveryInfo = {
      'km' : 5000,
      'deliveryPlace' : 'Aeropuerto Juan Santamaria',
      'gasLevel' : 'Vacio'
    };
    RevisionService.setCarDeliveryInfo(deliveryInfo);
    expect(RevisionService.getRevision().km).toBe(5000);
    expect(RevisionService.getRevision().deliveryPlace).toBe('Aeropuerto Juan Santamaria');
    expect(RevisionService.getRevision().gasLevel).toBe('Vacio');
  });

  it('Should set the tires to revision object', function() {
    var tires = {
      'rightFrontTire' : 'Kumho',
      'leftFrontTire' : 'Michellin',
      'rightBackTire' : 'Maxxis',
      'leftBackTire' : 'Yokohama'
    };

    RevisionService.setCarTires(tires);
    expect(RevisionService.getRevision().tires.leftBackTire).toBe('Yokohama');
    expect(RevisionService.getRevision().tires.leftFrontTire).toBe('Michellin');
    expect(RevisionService.getRevision().tires.rightFrontTire).toBe('Kumho');
    expect(RevisionService.getRevision().tires.rightBackTire).toBe('Maxxis');

  });

  it('Should set the damages to revision object', function () {
    var damages = [
      {'json' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
       'part': 'Puerta Izquierda Frontal',
       'damageType'  : 'rayon'},
      {'json' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
        'part': 'Bumper Delantero',
        'damageType'  : 'raspado'}
    ];
    RevisionService.setDamages(damages);
    expect(RevisionService.getRevision().damages[0].part).toBe('Puerta Izquierda Frontal');
    expect(RevisionService.getRevision().damages[1].part).toBe('Bumper Delantero');
    expect(RevisionService.getRevision().damages[0].damageType).toBe('rayon');
    expect(RevisionService.getRevision().damages[1].damageType).toBe('raspado');
    expect(RevisionService.getRevision().damages[0].json).toBe('[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...');
    expect(RevisionService.getRevision().damages[1].json).toBe('[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...');
  });

  it('Should set the observations to revision object', function () {
    var observations = [
      {'part' : 'Asiento de piloto', 'observation' : 'Manchado'},
      {'part' : 'Rejilla del dash', 'observation' : 'Quebrada'}
    ];

    RevisionService.setObservations(observations);
    expect(RevisionService.getRevision().observations[0].part).toBe('Asiento de piloto');
    expect(RevisionService.getRevision().observations[0].observation).toBe('Manchado');
    expect(RevisionService.getRevision().observations[1].part).toBe('Rejilla del dash');
    expect(RevisionService.getRevision().observations[1].observation).toBe('Quebrada');
  });

  it('Should set the car accesories to revision object', function() {
    var carAccesories = {
      'antenna': true,
      'legal-documents': true,
      'emblems': true,
      'tools': true,
      'emergency-kit': true,
      'back-up-tire': true,
      'plates': true,
      'rack': false,
      'carpet': true
    };

    RevisionService.setCarAccesories(carAccesories);
    expect(RevisionService.getRevision().carAccesories.antenna).toBe(true);
    expect(RevisionService.getRevision().carAccesories['legal-documents']).toBe(true);
    expect(RevisionService.getRevision().carAccesories.emblems).toBe(true);
    expect(RevisionService.getRevision().carAccesories.tools).toBe(true);
    expect(RevisionService.getRevision().carAccesories['emergency-kit']).toBe(true);
    expect(RevisionService.getRevision().carAccesories['back-up-tire']).toBe(true);
    expect(RevisionService.getRevision().carAccesories.rack).toBe(false);
    expect(RevisionService.getRevision().carAccesories.carpet).toBe(true);

  });

  it('Should add feedback to revision object', function() {
    var feedback = {
      'useAgain' : 'yes',
      'useAgainReason' : 'Because they were very kind with me',
      'improve' : 'Phone service, it took like 3 phone calls to contact you',
      'rate' : '7',
      'recommendation' : '6',
      'worthMoney' : 'yes'
    };

    RevisionService.setFeedback(feedback);
    expect(RevisionService.getRevision().feedback.useAgain).toBe('yes');
    expect(RevisionService.getRevision().feedback.useAgainReason).toBe('Because they were very kind with me');
    expect(RevisionService.getRevision().feedback.improve).toBe('Phone service, it took like 3 phone calls to contact you');
    expect(RevisionService.getRevision().feedback.rate).toBe('7');
    expect(RevisionService.getRevision().feedback.recommendation).toBe('6');
    expect(RevisionService.getRevision().feedback.worthMoney).toBe('yes');
  });

  it('Should reset the revision object', function() {
    RevisionService.setUsername('Luis');
    RevisionService.setNewType('check-out');
    RevisionService.resetRevision();
    expect(RevisionService.getRevision()).toEqual({ });
  });
});
