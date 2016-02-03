(function() {
  'use strict';

  angular
    .module('budgetrentacar.carInfo')
    .service('CarInfoFirebaseService', FirebaseService);

    FirebaseService.$inject = ['$firebaseObject', 'LoginFirebaseService', 'ScannerService'];

    function FirebaseService($firebaseObject, LoginFirebaseService, ScannerService){

      var service = {
        rootRef : new Firebase('https://budget-cr.firebaseio.com/'),
        getCarInfo: getCarInfo,
        fillNewRevisionData: fillNewRevisionData,
        pushNewRevision: pushNewRevision,
        carInfo: null,
        currentCarId: ScannerService.getCode(),
        currentRevisionId: null,
        newRevision: {}
      }
      return service


      function getCarInfo(){
        var reference = service.rootRef.child('vehicles').child(ScannerService.getCode());
        service.carInfo = $firebaseObject(reference);
        return service.carInfo.$loaded();
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
