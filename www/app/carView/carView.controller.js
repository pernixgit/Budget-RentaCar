(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController', ['$scope','$ionicPopup',function( $scope, $ionicPopup){
    
    var vm = $scope; //change $scope for this when ionic fix the issue
    var circle;
    var canvas = document.getElementById('canvas');
    var canvasCont = document.getElementById('canvasCont');
    var context = canvas.getContext('2d');
    var dbObservationHash ={};
    var FBREFERENCE = new Firebase("https://boiling-torch-654.firebaseio.com/car");
    var ID=0;
    var index=0;
    var observationCount=0;
    var paperLibInstance;  
    vm.observacion = {
      part : "",
      obs : "",
    };
    vm.shouldShowDelete = true;
    vm.observacionHash = {};
    init();
    
    vm.pushtoDB=function(size){
      var dbObservationHash=vm.observacionHash;
      if (size > 0){
        index+=1;
        var obsSet = FBREFERENCE.child("observaciones/observacion"+index);
        obsSet.set({
          Parte: dbObservationHash[index].part,
          observacion: dbObservationHash[index].obs
        })
        vm.pushtoDB(size-1);
      } 
      else {
        var impCanvas=project.activeLayer.exportJSON();  
        var carCanvas = FBREFERENCE.child("Canvas");
        carCanvas.set({
          Canvas: impCanvas
        });
      }
    }
    
    vm.downEvent=function(event) {
      drawCircle(event);
      vm.showDialog(true);
    }

    vm.showDialog=function(fromCanvas){
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
              fillMap();
            } 
          }
        }] 
     });}

    vm.onItemDelete = function(id, circleID) {
      deleteCircle(circleID);
      delete vm.observacionHash[id];
    };

    vm.size = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      vm.pushtoDB(size);
  };

    function init(){
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
      vm.observacionHash[ID+=1]={id:ID, part:vm.observacion.part, obs:vm.observacion.obs, circleID: circle.id};
      vm.observacion.part= ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();
