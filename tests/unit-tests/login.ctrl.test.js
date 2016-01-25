describe('LoginCtrl', function() { 
  var ctrl;
  beforeEach(function() {
    module('budgetrentacar');
    inject(function($controller) {
        ctrl = $controller('Login');
    });
  });

  it('should create controller', function() {
        expect(ctrl).not.toBeUndefined();
    }); 
});