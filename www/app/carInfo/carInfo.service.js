(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .service('CarInfoFirebaseService', FirebaseService);

    FirebaseService.$inject = ['$firebaseObject', '$q', 'LoginFirebaseService', 'ScannerService'];
    function FirebaseService($firebaseObject, $q, LoginFirebaseService, ScannerService){

      var service = {
        rootRef : new Firebase('https://budget-test.firebaseio.com'),
        getCarInfo: getCarInfo,
        fillNewRevisionData: fillNewRevisionData,
        pushNewRevision: pushNewRevision,
        carInfo: null,
        currentCarId: ScannerService.getCode(),
        currentRevisionId: '-K94CMrKis1y-MlXXKIs',
        newRevision: {}
      }
      return service


      function getCarInfo(){
        var q = $q.defer();
        var reference = service.rootRef.child('vehicles').child(service.currentCarId);
        service.carInfo = $firebaseObject(reference);
        service.carInfo.$loaded().then(function() {
          q.resolve();
        })
        return q.promise
      }

      function fillNewRevisionData(){
        setNewRevisionCarId();
        setNewRevisionUsername();
        setNewRevisionTimestamp();
        setNewRevisionType();
      }

      function setNewRevisionCarId(){
        service.newRevision.car = service.carInfo.$id;
      }

      function setNewRevisionType(){
        if (service.carInfo.currentRevisionType == 'check-in') {
          service.newRevision.type = 'check-out';
        }else{
          service.newRevision.type = 'check-in';
        }
      }

      function setNewRevisionTimestamp(){
        service.newRevision.timestamp = Date.now();
      }

      function setNewRevisionUsername(){
        service.newRevision.username = LoginFirebaseService.username;
      }

      function pushNewRevision(){
        var reference = service.rootRef.child('revisions');
        var pushRef = reference.push(service.newRevision);
        saveCreatedRevisionId(pushRef.key());           
      }

      function saveCreatedRevisionId(id){
        service.currentRevisionId = id;
      }

    }

})()
