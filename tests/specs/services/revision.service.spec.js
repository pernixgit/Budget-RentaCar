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
    expect(RevisionService.getRevision().vehicle_ref).toBe('12345');
  });

  it('Should set the carDeliveryInfo to revision object', function () {
    var deliveryInfo = {
      'km' : 5000,
      'delivery_place' : 'Aeropuerto Juan Santamaria',
      'gas_level' : 'Vacio'
    };
    RevisionService.setCarDeliveryInfo(deliveryInfo);
    expect(RevisionService.getRevision().km).toBe(5000);
    expect(RevisionService.getRevision().delivery_place).toBe('Aeropuerto Juan Santamaria');
    expect(RevisionService.getRevision().gas_level).toBe('Vacio');
  });

  it('Should set the tires to revision object', function() {
    var tires = {
      'right_front' : 'Kumho',
      'left_front' : 'Michellin',
      'right_back' : 'Maxxis',
      'left_back' : 'Yokohama'
    };

    RevisionService.setCarTires(tires);
    expect(RevisionService.getRevision().tires.left_back).toBe('Yokohama');
    expect(RevisionService.getRevision().tires.left_front).toBe('Michellin');
    expect(RevisionService.getRevision().tires.right_front).toBe('Kumho');
    expect(RevisionService.getRevision().tires.right_back).toBe('Maxxis');

  });

  it('Should set the damages to revision object', function () {
    var damages = [
      {'json_canvas' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
       'part': 'Puerta Izquierda Frontal',
       'damage_type'  : 'rayon'},
      {'json_canvas' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
        'part': 'Bumper Delantero',
        'damage_type'  : 'raspado'}
    ];
    RevisionService.setDamages(damages);
    expect(RevisionService.getDamages()[0].part).toBe('Puerta Izquierda Frontal');
    expect(RevisionService.getDamages()[1].part).toBe('Bumper Delantero');
    expect(RevisionService.getDamages()[0].damage_type).toBe('rayon');
    expect(RevisionService.getDamages()[1].damage_type).toBe('raspado');
    expect(RevisionService.getDamages()[0].json_canvas).toBe('[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...');
    expect(RevisionService.getDamages()[1].json_canvas).toBe('[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...');
  });

  it('Should set the observations to revision object', function () {
    var observations = [
      {'part' : 'Asiento de piloto', 'observation' : 'Manchado'},
      {'part' : 'Rejilla del dash', 'observation' : 'Quebrada'}
    ];

    RevisionService.setObservations(observations);
    expect(RevisionService.getObservations()[0].part).toBe('Asiento de piloto');
    expect(RevisionService.getObservations()[0].observation).toBe('Manchado');
    expect(RevisionService.getObservations()[1].part).toBe('Rejilla del dash');
    expect(RevisionService.getObservations()[1].observation).toBe('Quebrada');
  });

  it('Should set the car parts to revision object', function() {
    var carAccesories = {
      'antenna': true,
      'legal-documents': true,
      'emblems': true,
      'tools': true,
      'emergency-kit': true,
      'plates': true,
      'rack': false,
      'carpet': true
    };

    RevisionService.setCarAccesories(carAccesories);
    expect(RevisionService.getRevision().car_parts_present.antenna).toBe(true);
    expect(RevisionService.getRevision().car_parts_present['legal-documents']).toBe(true);
    expect(RevisionService.getRevision().car_parts_present.emblems).toBe(true);
    expect(RevisionService.getRevision().car_parts_present.tools).toBe(true);
    expect(RevisionService.getRevision().car_parts_present['emergency-kit']).toBe(true);
    expect(RevisionService.getRevision().car_parts_present.rack).toBe(false);
    expect(RevisionService.getRevision().car_parts_present.carpet).toBe(true);

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

  it('Should add new observation', function() {
    RevisionService.addObservation({});
    expect(RevisionService.getObservations()).toEqual([{}]);
  });

  it('Should add and delete an observation', function() {
    RevisionService.addObservation({observation: 'observation'});
    RevisionService.removeObservation({observation: 'observation'});
    expect(RevisionService.getObservations()).toEqual([]);
  });

  it('Should reset the revision, observations and damages objects', function() {
    RevisionService.addObservation({observation: 'observation'});
    RevisionService.setUsername('Luis');
    var damages = [
      {'json_canvas' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
        'part': 'Puerta Izquierda Frontal',
        'damage_type'  : 'rayon'},
      {'json_canvas' : '[\"Group\",{\"applyMatrix\":true,\"children\":[[\"Path\",...',
        'part': 'Bumper Delantero',
        'damage_type'  : 'raspado'}
    ];
    RevisionService.setDamages(damages);
    RevisionService.resetRevision();
    expect(RevisionService.getObservations()).toEqual([]);
    expect(RevisionService.getRevision()).toEqual({});
    expect(RevisionService.getDamages()).toEqual({});
  });
});
