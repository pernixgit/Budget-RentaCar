describe('Login', function() {
  var username = element(by.model('vm.username'));
  var password = element(by.model('vm.password'));
  beforeEach(function() {
      browser.get('');  
      browser.sleep(500); 
  });

  it('should go to scanner page with admin credentials', function() {
    username.sendKeys('admin');
    password.sendKeys('admin');
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
    element(by.css('.budget-orange-button.button.button-block.button-assertive')).click();
    browser.sleep(900); 
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'scanner');
    browser.sleep(1000);
  });

  it('should stay in login page when using wrong crendetials and show error popup', function() {
    username.sendKeys('SIRIASNOTIENECREDENCIALES');
    password.sendKeys('abcdefasdasd');
    expect(element(by.css('.budget-orange-button.button.button-block.button-assertive')).isPresent()).toBe(true);
    element(by.css('.budget-orange-button.button.button-block.button-assertive')).click();
    browser.sleep(500);  
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    browser.sleep(500); 

  });

});

