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
        onload = new Firebase("https://boiling-torch-654.firebaseio.com/car/canvas"),
        paperLibInstance;  
        vm.observacion = {
          part : "",
          obs : "",
        }  

    canvas.style.background = "url('http://i.imgur.com/JrFZF8T.jpg')  no-repeat center";
    canvas.style.backgroundSize = "100% 100%" 

    vm.shouldShowDelete = true;
    vm.observacionHash = {};
    init();

    function init(){
      paperLibInstance = paper.install(window);
      paperLibInstance = paper.setup('canvas'); // your canvas html id
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
      try { // on android
        return new Point(event.gesture.center.pageX, event.gesture.center.pageY) 
      }
      catch (exception) { 
        return new Point(event.x, event.y);
      }
    }

    vm.showDialog=function(){
      var confirmPopup = $ionicPopup.confirm({
        title: 'Observacion',
        templateUrl: 'app/content/content.html',
        scope: vm 
      });
      confirmPopup.then(function(res) {
        if(res) {
          fillMap();
          } else {
            deleteCircle(circle.id)
          }
        });
      };

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
      circle.strokeColor = '#ff0000';
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