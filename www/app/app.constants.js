(function() {
  'use strict';
  angular
    .module('budgetrentacar')
    .constant('FIREBASE_URL', 'https://budgetest.firebaseio.com/')
    .constant('FIREBASE_CONFIG', {
      DEV: { apiKey: "AIzaSyB0s_8HZvnVziyhPCx_rPrxXTBs0Ceucxs",
              authDomain: "budget-cr-dev.firebaseapp.com",
              databaseURL: "https://budget-cr-dev.firebaseio.com",
              storageBucket: "budget-cr-dev.appspot.com",
              messagingSenderId: "896877567573" },

      STAGING: {  apiKey: "AIzaSyAk5uI1me3mx5IqLEc_Een2M4ybtAOhfuE",
                  authDomain: "budget-cr-staging.firebaseapp.com",
                  databaseURL: "https://budget-cr-staging.firebaseio.com",
                  storageBucket: "budget-cr-staging.appspot.com",
                  messagingSenderId: "327629040301" },

      PRODUCTION: { apiKey: "AIzaSyD8TJxZwVctB_a1tZ0w4qXD6zHLcorMN0Y",
                    authDomain: "budget-cr.firebaseapp.com",
                    databaseURL: "https://budget-cr.firebaseio.com",
                    storageBucket: "budget-cr.appspot.com",
                    messagingSenderId: "484294265719" }
    });
})();
