(function() {
  'use strict';

  angular
    .module('budgetrentacar.tireRevision')
    .service('TireRevisionFirebaseService', TireRevisionFirebaseService);

    TireRevisionFirebaseService.$inject = ['$firebaseObject','CarInfoFirebaseService'];
    
    function TireRevisionFirebaseService($firebaseObject, CarInfoFirebaseService){
      this.pushNewItems = pushNewItems;
      var rootRef  = new Firebase('https://budget-cr.firebaseio.com/');
      return this;

      function pushNewItems(items){
        var reference = rootRef.child('revisions').child(CarInfoFirebaseService.currentRevisionId);
        reference.update(items);
      }   
  }
})();
