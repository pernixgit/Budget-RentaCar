(function() {
  'use strict';

  angular
    .module('budgetrentacar.login')
    .service('LoginFirebaseService', LoginFirebaseService);

  LoginFirebaseService.$inject = ['FIREBASE_URL', '$firebaseObject'];

  function LoginFirebaseService(FIREBASE_URL, $firebaseObject) {
    var service = {
      getUserInfo: getUserInfo,
      root: FIREBASE_URL,
      userInfo: null
    };

    return service;

    function getUserInfo(username) {
      var reference = new Firebase(service.root)
        .child('users')
        .child(username);
      service.userInfo = $firebaseObject(reference);
      return service.userInfo.$loaded();
    }

  }
})();
