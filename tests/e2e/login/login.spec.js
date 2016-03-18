describe('Login', function() {
  var username = element(by.model('vm.username'));
  var password = element(by.model('vm.password'));
  beforeEach(function() {
<<<<<<< HEAD
    browser.get('');  
    browser.sleep(500); 
=======
      browser.get(''); 
      browser.sleep(500);
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f
  });

  it('should go to scanner page with admin credentials', function() {
    username.sendKeys('admin');
    password.sendKeys('admin');
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
    element(by.css('.budget-orange-button.button.button-block.button-assertive')).click();
<<<<<<< HEAD
    browser.sleep(900); 
=======
    browser.sleep(900);
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'scanner');
    browser.sleep(1000);
  });

  it('should stay in login page when using wrong crendetials and show error popup', function() {
    username.sendKeys('SIRIASNOTIENECREDENCIALES');
    password.sendKeys('abcdefasdasd');
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
    element(by.css('.budget-orange-button.button.button-block.button-assertive')).click();
<<<<<<< HEAD
    browser.sleep(500);  
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    browser.sleep(500); 

  });

});
=======
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    browser.sleep(500);

  });
>>>>>>> b6ddcd36f750ac4ce459467b6fdba158f093611f

});
