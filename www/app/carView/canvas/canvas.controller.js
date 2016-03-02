(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CanvasController', CanvasController);

  CanvasController.$inject = ['$scope',
                              'CarViewService',
                              '$ionicPopup',
                              'damageOptions',
                              'damageTypeSelected',
                              'parts',
                              'selectedPart'];

  function CanvasController($scope,
                            CarViewService,
                            $ionicPopup,
                            damageOptions,
                            damageTypeSelected,
                            parts,
                            selectedPart) {

    var vm = $scope;
    var shape;
    vm.currentObservation = {};
    vm.currentObservation.damageType = damageTypeSelected;
    vm.currentObservation.part = selectedPart;
    vm.damageOptions = damageOptions;
    vm.parts = parts;

    activate();

    function activate() {
      initPaperLibrary();
      importCanvasJson();
    }

    function initPaperLibrary() {
      paper.install(window);
      paper.setup('canvas');
    }

    function deleteShape(shapeId) {
      var items = project._activeLayer.children;
      for(var i = 0; i < items.length; i++){
        if(items[i]._id == shapeId){
          items[i].remove();
        }
      }
      paper.view.update();
    }

    vm.downEvent = function(event) {
      vm.showDialog(true, event);
    };

    vm.showDialog = function(fromCanvas, event) {
      var confirmPopup = $ionicPopup.confirm({
        templateUrl: 'app/content/content.html',
        cssClass: 'popup',
        scope: vm ,
        buttons: [{
          text: '<i class="icon ion-close-round"></i>' ,
          type: 'buttonpopCanc',
          onTap: function(e) {
            if (e && fromCanvas) {
            }
          }
        },
          {
            text: '<i class="icon ion-checkmark-round"></i>',
            type: 'buttonpopOK',
            onTap: function(e) {
              if (e) {
                drawShape(event);
                appendObservation(vm.currentObservation);
              }
            }
          }]
      });
    };

    vm.onItemDelete = function(observation) {
      if (observation.shapeId) {
        deleteShape(observation.shapeId);
      }
      var observationIndex;
      observationIndex = CarViewService.observationsArray.indexOf(observation);
      CarViewService.observationsArray.splice(observationIndex, 1);
      CarViewService.canvasComponents.splice(observationIndex, 1);
    };

    function drawShape(event) {
      switch (vm.currentObservation.damageType.name) {
        case 'Golpe':
          drawDamage(event);
          break;
        case 'Rayon':
          drawScratch(event);
          break;
        case 'Camanance':
          drawDent(event);
          break;
        case 'Raspon':
          drawBigScratch(event);
          break;
        default:
          break;
      }
      paper.view.update();
    }

    function drawDamage(event) {
      event.point = getPoint(event);
      var line1 = new Path.Line([20, 20], [80, 80]);
      var line2 = new Path.Line([80, 20], [20, 80]);

      shape = new Group({
        children: [line1, line2],
        center: event.point,
        position: event.point,
        strokeColor: '#ED5505',
        strokeWidth: 10
      });
    }

    function drawScratch(event) {
      event.point = getPoint(event);
      shape = new Path.Line({
        from: [20, 50],
        to: [80, 50],
        center: event.point,
        position: event.point,
        strokeColor: '#ED5505',
        strokeWidth: 10
      });
    }

    function drawDent(event) {
      event.point = getPoint(event);
      shape = new Path.Ellipse({
        point: [20, 20],
        size: [80, 30],
        fillColor: '#ED5505',
        center: event.point,
        position: event.point,
        strokeColor: '#ED5505',
        strokeWidth: 10
      });
    }

    function drawBigScratch(event) {
      event.point = getPoint(event);
      var line1 = new Path.Line([10, 10], [30, 40]);
      var line2 = new Path.Line([50, 10], [25, 40]);
      var line3 = new Path.Line([45, 10], [70, 40]);
      var line4 = new Path.Line([90, 10], [65, 40]);

      shape = new Group({
        children: [line1, line2, line3, line4],
        center: event.point,
        position: event.point,
        strokeColor: '#ED5505',
        strokeWidth: 10
      });

    }

    function getPoint(event) {
      var fixedX = event.x - 10;
      var fixedY = event.y - 65;
      return new Point(fixedX, fixedY);
    }

    function importCanvasJson() {
      var layer = new Layer();
      CarViewService.getDamages()
        .then(function(snapshot) {
        var damages = snapshot.val();
        for (var position = 0; position < damages.length; position ++){
          project._activeLayer.importJSON(damages[position].json);
          addDamageToList(damages[position].part, damages[position].damageType, project._activeLayer.children[position]._id);
          CarViewService
            .canvasComponents.push(
              createCanvasItemObject(
                damages[position].part,
                damages[position].damageType,
                damages[position].json)
            );
        }
        paper.view.update();
      });
    }

    function addDamageToList(part, damageType, shapeId) {
      var observation = {
        part: {
          name: part,
        },
        damageType: {
          name: damageType,
        },
        shapeId: shapeId
      };
      CarViewService.observationsArray.push(observation);
    }

    function appendObservation(currentObservation) {
      if (shape) {
        currentObservation.shapeId = shape.id;
      }
      CarViewService.observationsArray.push(vm.currentObservation);
      var canvasItem = createCanvasItemObject(vm.currentObservation.part.name,
        vm.currentObservation.damageType.name,
        shape.exportJSON({asString: true}))
      CarViewService.canvasComponents.push(canvasItem);
      resetCurrentObservation();
      shape = null;
    }

    function createCanvasItemObject(part, damageType, json) {
      return {
        part: part,
        damageType: damageType,
        json: json
      }
    }

    function resetCurrentObservation() {
      vm.currentObservation = {};
      vm.currentObservation.damageType = damageTypeSelected;
      vm.currentObservation.part = selectedPart;
    }
  }
})();