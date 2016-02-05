(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CarViewController', CarViewController);

    CarViewController.$inject = ['$scope','$ionicPopup', '$state', 'CarViewService', 'CarInfoFirebaseService'];

    function CarViewController($scope, $ionicPopup, $state, CarViewService, CarInfoFirebaseService){
    
      var vm = $scope; //change $scope for this when ionic fix the issue
      var circle;
      var canvas = document.getElementById('canvas');
      var canvasCont = document.getElementById('canvasCont');
      var paperLibInstance;
      setTimeout(function() {}, 10);
      var previousId;
      vm.currentObservation = {
      };
      vm.goToExteriorParts = goToExteriorParts;
      vm.CarViewService = CarViewService;
      vm.currentCarTraction = '4x2';

      activate();

      function activate(){
        //screen.lockOrientation('portrait');
        initPaperLibrary();
        vm.shouldShowDelete = true;
      }

      function goToExteriorParts(){
        CarViewService.pushObservations();
        CarViewService.resetObservations();
        $state.go("carParts");
      }

      function appendObservation(currentObservation){
        if (circle) { 
          currentObservation.circleID = circle.id;
        }
        CarViewService.observationsArray.push(vm.currentObservation);
        vm.currentObservation = {};
        circle = null;
      }

      function deleteCircle(circleID){
        circle = new Path.Circle({});
        while(circle.id != circleID){
          circle = circle.previousSibling
        }
        circle.remove();
        paper.view.update();
        circle = new Path.Circle({});
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
                if(vm.currentObservation.part.trim() && vm.currentObservation.description.trim()){
                  if(vm.currentObservation.part.trim() || vm.currentObservation.description.trim()){
                    appendObservation(vm.currentObservation);
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

      vm.onItemDelete = function(observation) {

        if (observation.circleID){
        deleteCircle(observation.circleID);
      }
        var observationIndex = CarViewService.observationsArray.indexOf(observation)
        CarViewService.observationsArray.splice(observationIndex, 1);
      };

      function initPaperLibrary(){
        paper.install(window);
        paper.setup('canvas');
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

      function getPoint(event) {
        return new Point(event.x, event.y);      
      }   
  }
})();
