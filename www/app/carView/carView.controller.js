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

    vm.shouldShowDelete = true;
    vm.observacionHash = {};
    init();

    function init(){
      paper.install(window);
      paper.setup('canvas'); // your canvas html id
      myPath = new Path();
      myPath.strokeColor = 'black';
    }

    var raster = new paper.Raster({
      source: img,
      position: paper.view.center,
    });

    vm.downEvent=function(event) {
      drawCircle();
    }

    vm.upEvent = function(event) {
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
      vm.observacion.part = ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();