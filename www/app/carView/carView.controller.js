(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController', CarViewController);

    CarViewController.$inject = ['$scope','$ionicPopup', '$state', 'CarViewService'];

    function CarViewController($scope, $ionicPopup, $state, CarViewService){
    
      var vm = $scope; //change $scope for this when ionic fix the issue
      var circle;
      var canvas = document.getElementById('canvas');
      var canvasCont = document.getElementById('canvasCont');
      var context = canvas.getContext('2d');
      var dbObservationHash ={};
      var ID=0;
      var index=0;
      var observationCount=0;
      var paperLibInstance; 
      vm.observation = {
        part : "",
        obs : "",
      };
      vm.shouldShowDelete = true;
      vm.observationHash = {};
      initPaperLibrary();
      vm.goToExteriorParts = goToExteriorParts;

      function goToExteriorParts(){
        $state.go("carExterior");
      }

      function pushtoDB(size){
        var dbObservationHash = vm.observationHash;
        if (size > 0){
          index += 1;
          var obsSet = CarViewService.createObservation(index);
          obsSet.set({
            part: dbObservationHash[index].part,
            observation: dbObservationHash[index].obs
          })
          vm.pushtoDB(size-1);
        } 
        else {
          var impCanvas = project.activeLayer.exportJSON();  
          var carCanvas = firebaseReference.child("Canvas");
          carCanvas.set({
            Canvas: impCanvas
          });
        }
      }

      vm.downEvent = function(event) {
        drawCircle(event); 
        vm.showDialog(true);
      }

      vm.showDialog = function(fromCanvas){
        var confirmPopup = $ionicPopup.confirm({
          templateUrl: 'app/content/content.html',
          cssClass: 'popup',
          scope: vm ,
          buttons:[{ 
            text: '<i class="icon ion-close-round"></i>' ,
            type: 'buttonpopCanc',
            onTap: function(e) {
              if (e && fromCanvas) {
                deleteCircle(circle.id)
              }
            }
          }, 
          {
            text: '<i class="icon ion-checkmark-round"></i>',
            type: 'buttonpopOK',
            onTap: function(e) {
              if (e) {
                if(vm.observation.part.trim() && vm.observation.obs.trim()){
                  if(vm.observation.part.trim() || vm.observation.obs.trim()){
                    fillMap();
                  }
                }else{
                  alert("Por favor complete los espacios");
                  deleteCircle(circle.id);
              } 
            }
          }
          }] 
       });
      }

      vm.onItemDelete = function(id, circleID) {
        deleteCircle(circleID);
        delete vm.observationHash[id];
      };

      function pushObservationsToDb(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        vm.pushtoDB(size);
    };

      function initPaperLibrary(){
        paperLibInstance = paper.install(window);
        paperLibInstance = paper.setup('canvas'); 
        paperLibInstance = new Path();
        paperLibInstance.strokeColor = 'black';
      }

      function drawCircle(event){
        event.point = getPoint(event);
        circle = new Path.Circle({
          center: event.point, 
          radius: 20,
          position: event.point
        });
        circle.strokeColor = '#F1592A';
        circle.strokeWidth = 10;
      }

      function deleteCircle(circleID){
        while(circle.id != circleID){
          circle = circle.previousSibling
        }
        circle.remove();
        paper.view.update();
        circle = new Path.Circle({});
      }

      function getPoint(event) {
          return new Point(event.x, event.y-30);      
      }

      function fillMap(){
        vm.observationHash[ID+=1] = {id:ID, part:vm.observation.part, obs:vm.observation.obs, 
                                    circleID: circle.id};
        vm.observation.part= " "; 
        vm.observation.obs = " ";
      }    
  }
})();
