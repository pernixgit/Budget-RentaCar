(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController',['$scope','$ionicPopup',function($scope,$ionicPopup){
    
    var myCircle = 0,
        vm = $scope,
        img = "http://i.imgur.com/JrFZF8T.jpg",
        myPath,
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        ID=0,
        group,
        myCirclename;
        vm.observacion = {
          part : "",
          obs : "",
        }   
    canvas.style.background = "url('http://i.imgur.com/JrFZF8T.jpg')  no-repeat center";
    canvas.style.backgroundSize ="100% 100%" 
    vm.shouldShowDelete = true;
    vm.observacionHash = {};
    var observacionHashTemp ={};
    var ref = new Firebase("https://boiling-torch-654.firebaseio.com/car");
    var refCanvas = new Firebase("https://boiling-torch-654.firebaseio.com/car");
    var onload = new Firebase("https://boiling-torch-654.firebaseio.com/car/canvas");
    var temp;
    var cont=0;
          var index=0;

    init();
    function init(){
      temp=paper.install(window);
      temp=paper.setup('canvas'); // your canvas html id
      temp.activate();
      temp = new Path();
      temp.strokeColor = 'black';
      console.log(project.activeLayer);

    }

    vm.putDB=function(){
      var impCanvas=project.activeLayer.exportJSON();
      var observacionHashTemp=vm.observacionHash;
      var carCanvas = ref.child("Canvas");
      carCanvas.set({
        Canvas: impCanvas
        })
      if (cont > 0){
        index+=1;
        console.log(cont)
        var obsSet = ref.child("observaciones/observacion"+observacionHashTemp[index].id);
        obsSet.set({
            Parte: observacionHashTemp[index].part,
            observacion: observacionHashTemp[index].obs
        })
        cont-=1;
        vm.putDB();
      }
      
      
    }
    
    vm.downEvent=function(event) {
      drawCircle();
      console.log(vm.observacionHash)
    }

    vm.upEvent = function(event) {
      vm.showDialog();
      console.log(cont);
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
        scope: vm // Scope (optional). A scope to link to the popup content.
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
      console.log(myCircle.position)
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
      vm.observacion.part = ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();