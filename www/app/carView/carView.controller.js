(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController',['$scope','$ionicPopup',function($scope,$ionicPopup){
    
    var myCircle = 0,
        vm = $scope,
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        ID=0,
        cont=0,
        index=0,
        dbObservationHash ={},
        FBREFERENCE = new Firebase("https://boiling-torch-654.firebaseio.com/car"),
        CANVASREFERENCE = new Firebase("https://boiling-torch-654.firebaseio.com/car"),
        onload = new Firebase("https://boiling-torch-654.firebaseio.com/car/canvas"),
        paperInst;  
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
      paperInst = paper.install(window);
      paperInst = paper.setup('canvas'); // your canvas html id
      paperInst = new Path();
      paperInst.strokeColor = 'black';
    }

    vm.pushtoDB=function(){
      var impCanvas=project.activeLayer.exportJSON(),
          dbObservationHash=vm.observacionHash,
          carCanvas = FBREFERENCE.child("Canvas");
      carCanvas.set({
        Canvas: impCanvas
        })
      if (cont > 0){
        index+=1;
        cont-=1;
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
        return new Point(event.gesture.center.pageX, event.gesture.center.pageY) // 44 = header bar pixel height
      }
      catch (e) { // on ionic serve, brower
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
            deleteCircle(myCircle.id)
          }
        });
      };

    vm.onItemDelete = function(id, circleID) {
      delete vm.observacionHash[id];
      deleteCircle(circleID);
    };

    function drawCircle(){
      cont+=1;
      myCircle = new Path.Circle({
        center: getPoint(event),
        radius: 20,
      });
      myCircle.strokeColor = '#ff0000';
      myCircle.strokeWidth = 10;
    }

    function deleteCircle(circleID){
      while(myCircle.id != circleID){
        myCircle = myCircle.previousSibling
      }
      myCircle.remove();
      paper.view.update();
      myCircle = new Path.Circle({});
    }

    function fillMap(){
      vm.observacionHash[ID+=1]={id:ID, part:vm.observacion.part, obs:vm.observacion.obs, myCircleID: myCircle.id};
      vm.observacion.part= ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();