## How to use this project

Clone Project

Then run npm and bower to get all needed dependencies:

```bash
$ npm install
$ bower install
``` 

Add Android platform:

```bash
$ ionic platform add android
```

Add ionic ngCordova library
```bash
cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
```

Install Karma CLI
```bash
npm install -g karma-cli
```

Install phatomjs
```bash
npm install -g phantomjs
```

Install protractor
```bash
npm install -g protractor --save
```

Use the web manager to install the chrome-driver and selenium server.
```bash
webdriver-manager update
```

In case views are not showing on device (emulator, smartphone) install:
```bash
 add plugin cordova-plugin-whitelist --save
 ```

Everything is set up to serve from this www folder using
```bash
$ ionic serve
```
## Styleguide

Refer to AngularJS John Papa Styleguide: https://github.com/johnpapa/angular-styleguide
