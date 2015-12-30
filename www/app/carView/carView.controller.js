(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController',['$scope','$ionicPopup',function($scope,$ionicPopup){

    var vm = $scope;
    var img = "http://i.imgur.com/JrFZF8T.jpg";
    var myPath;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var id=0;
    vm.observacion = {
      part : "",
      obs : "",
    }
    $scope.shouldShowDelete = true;

    vm.observacionHash = {};
    init();
    function init(){
      paper.install(window);
      paper.setup('canvas'); // your canvas html id
    }
    var raster = new paper.Raster({
      source: img,
      position: paper.view.center,
    });

    vm.downEvent=function(event) {
      myPath = new Path();
      myPath.strokeColor = 'black';
      var myCircle = new Path.Circle({
        center: getPoint(event),
        radius: 20
      });
      myCircle.strokeColor = '#ff0000';
      myCircle.strokeWidth = 10;
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
          console.log(vm.observacion);
          fillMap();
          } else {
          }
        });
      };

    vm.onItemDelete = function(id) {
      delete vm.observacionHash[id];
    };

    function fillMap(){
      vm.observacionHash[id+=1]={id:id, part:vm.observacion.part, obs:vm.observacion.obs};
      console.log(vm.observacionHash[id].id);
      vm.observacion.part = ""; 
      vm.observacion.obs = "";
    }    
  }]);
})();