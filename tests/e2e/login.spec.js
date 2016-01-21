describe('Budget Rent a Car', function() {
  it('should go to carview page with ocorella credentials', function() {
    browser.get('http://localhost:8100/#/');	
    var username = element(by.model('username'));
    username.sendKeys('ocorella');
    var password = element(by.model('password'));
    password.sendKeys('ocorella');
    expect(element(by.css('.button-primary')).isPresent()).toBe(true);
    element(by.css(".button-primary")).click();
    browser.sleep(3000); 
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/carview');
  });
});

describe('Budget Rent a Car', function() {
  it('should stay in login page when using wrong crendetials and show error popup', function() {
    browser.get('http://localhost:8100/#/');	
    var username = element(by.model('username'));
    username.sendKeys('SIRIASNOTIENECREDENCIALES');
    var password = element(by.model('password'));
    password.sendKeys('abcdefasdasd');
    expect(element(by.css('.button-primary')).isPresent()).toBe(true);
    element(by.css(".button-primary")).click();
    browser.sleep(3000); 
    expect(element(by.css('.popup')).isPresent()).toBe(true);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/');
  });
});

describe('Budget Rent a Car', function() {
  it('should stay in login page and show popup when clicking the register <a> element', function() {
    browser.get('http://localhost:8100/#/');	
    var username = element(by.model('username'));
    username.sendKeys('SIRIASNOTIENECREDENCIALES');
    var password = element(by.model('password'));
    password.sendKeys('abcdefasdasd');
    expect(element(by.css('.link-button')).isPresent()).toBe(true);
    element(by.css(".link-button")).click();
    browser.sleep(3000); 
    expect(element(by.css('.popup')).isPresent()).toBe(true);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/');
  });
});

