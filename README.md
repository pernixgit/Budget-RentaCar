#Budget Rent A Car - Ionic App

### Installation
NPM and Bower need to be installed.

Run bower and npm to get all dependencies needed.
```sh
$ npm install
$ bower install
``` 

Copy needed libs from node modules:

``` sh
$ cp node_modules/@ionic/cloud/dist/bundle/ionic.cloud.min.js www/lib
$ cp node_modules/bluebird/js/browser/bluebird.min.js www/lib
```

###Runing on Android device
In order to run the application on an Android device:

Add Android platform:
```sh
$ ionic platform add android
```

Connect the device to the computer, allow USB debugging and then execute:
```sh
$ ionic run android
```

###Setting up tests
In order to run Karma and protractor tests, please do the following:

Install Karma CLI globally
```sh
npm install -g karma-cli
```

Install protractor globally
```sh
npm install -g protractor
```

Use the web manager to install the chrome-driver and selenium server.
```sh
webdriver-manager update
```

To run protractor tests, execute:
```sh
ionic serve
webdriver-manager start  
protractor protractor.conf.js
```

## Ionic deploy
In order to deploy to Ionic run the following command:

```sh
$ ionic upload --note "Upload message" --deploy channel
```
**NOTE**: The channel will be the enviroment (dev, staging, production)

## Deploy to Play Store
**NOTE** 
```sh
alias: budget
passphrase: Pernix123.
```

1. Run `cordova build --release android` this will generete the unsigned apk.
2. Download the keystore: https://drive.google.com/drive/u/1/folders/0B8xWjtkc3FbmYnNSWk5wMkc0RUE
3. Move the apk (`project/platforms/android/build/outputs/apk/android-release-unsigned.apk`) and the keystore to the same folder.
4. Run `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk budget`
5. Then run `zipalign -v 4 android-release-unsigned.apk budget.apk`

## Styleguide

Refer to AngularJS John Papa Styleguide: https://github.com/johnpapa/angular-styleguide
