(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController',['$scope','$ionicPopup',function( $scope, $ionicPopup){
    
    var circle,
        vm = $scope,
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        ID=0,
        observationCount=0,
        index=0,
        dbObservationHash ={},
        FBREFERENCE = new Firebase("https://boiling-torch-654.firebaseio.com/car"),
        CANVASREFERENCE = new Firebase("https://boiling-torch-654.firebaseio.com/car"),
        paperLibInstance;  
        vm.observacion = {
          part : "",
          obs : "",
        }  

    vm.shouldShowDelete = true;
    vm.observacionHash = {};
    init();

    function init(){
      paperLibInstance = paper.install(window);
      paperLibInstance = paper.setup('canvas'); 
      paperLibInstance = new Path();
      paperLibInstance.strokeColor = 'black';
    }

    vm.pushtoDB=function(){
      var impCanvas=project.activeLayer.exportJSON(),
          dbObservationHash=vm.observacionHash,
          carCanvas = FBREFERENCE.child("Canvas");
      carCanvas.set({
        Canvas: impCanvas
        })
      if (observationCount > 0){
        index+=1;
        observationCount-=1;
        var obsSet = FBREFERENCE.child("observaciones/observacion"+dbObservationHash[index].id);
        obsSet.set({
            Parte: dbObservationHash[index].part,
            observacion: dbObservationHash[index].obs
        })
        vm.pushtoDB();
      }
    }
    
    vm.downEvent=function(event) {
      drawCircle();
      vm.showDialog();
    }

    function getPoint(event) {
      try { 
        return new Point(event.gesture.center.pageX, event.gesture.center.pageY) 
      }
      catch (exception) { 
        return new Point(event.x, event.y);
      }
    }

    vm.showDialog=function(){
      var confirmPopup = $ionicPopup.confirm({
        templateUrl: 'app/content/content.html',
        cssClass: 'popup',
        scope: vm ,
        buttons:[{ 
                  text: '<i class="icon ion-close-round"></i>' ,
                  type: 'buttonpopCanc',
                  onTap: function(e) {
                    if (e) {
                      deleteCircle(circle.id)
                    }
                  }
                }, 
                {
                  text: '<i class="icon ion-checkmark-round"></i>',
                  type: 'buttonpopOK',
                  onTap: function(e) {
                    if (e) {
                      fillMap();
                    } 
                  }
                }] 
     });}

    vm.onItemDelete = function(id, circleID) {
      delete vm.observacionHash[id];
      deleteCircle(circleID);
    };

    function drawCircle(){
      observationCount+=1;
      circle = new Path.Circle({
        center: getPoint(event),
        radius: 20,
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

    function fillMap(){
      vm.observacionHash[ID+=1]={id:ID, part:vm.observacion.part, obs:vm.observacion.obs, circleID: circle.id};
      vm.observacion.part= ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();