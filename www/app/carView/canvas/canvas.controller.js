(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CanvasController', CanvasController);

  CanvasController.$inject = ['$scope',
                              'CarViewService',
                              '$ionicPopup',
                              'DAMAGE_OPTIONS',
                              'DAMAGE_TYPE_SELECTED',
                              'PARTS',
                              'SELECTED_PART',
                              'LastRevisionService'];

  function CanvasController($scope,
                            CarViewService,
                            $ionicPopup,
                            DAMAGE_OPTIONS,
                            DAMAGE_TYPE_SELECTED,
                            PARTS,
                            SELECTED_PART,
                            LastRevisionService) {

    var vm = $scope;
    var shape;
    vm.currentDamage = {};
    vm.currentDamage.damageType = DAMAGE_TYPE_SELECTED;
    vm.currentDamage.part = SELECTED_PART;
    vm.damageOptions = DAMAGE_OPTIONS;
    vm.parts = PARTS;
    vm.LastRevisionService = LastRevisionService;

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
      var canvasElements = project._activeLayer.children;
      for (var position = 0; position < canvasElements.length; position++) {
        if (canvasElements[position]._id == shapeId) {
          canvasElements[position].remove();
        }
      }
      paper.view.update();
    }

    vm.downEvent = function(event) {
      vm.showDialog(true, event);
    };

    vm.showDialog = function(fromCanvas, event) {
      $ionicPopup.confirm({
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
                appendDamage();
              }
            }
          }]
      });
    };

    vm.onItemDelete = function(observation) {
      var observationIndex = CarViewService
        .damages
        .indexOf(observation);
      deleteShape(observation.shapeId);
      CarViewService.damages.splice(observationIndex, 1);
    };

    function drawShape(event) {
      switch (vm.currentDamage.damageType.name) {
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

    function addDamagesToCanvas(damagesList) {
      for (var position = 0; position < damagesList.length; position++) {
        project._activeLayer.importJSON(damagesList[position].json_canvas);

        var canvasItem = createCanvasItemObject(
          project._activeLayer.children[position].id,
          damagesList[position].part,
          damagesList[position].damage_type,
          damagesList[position].json_canvas,
          false);

        CarViewService.addDamageToCanvasComponents(canvasItem);
        CarViewService.damagesLoaded = true;
      }
      paper.view.update();
    }

    function importCanvasJson() {
      var layer = new Layer();
      if (CarViewService.damagesLoaded) {
        var previousDamages = CarViewService.damages;
        CarViewService.resetDamages();
        addDamagesToCanvas(previousDamages);
      }else {
        LastRevisionService.fetchRevisionData()
          .then(function() {
            if (LastRevisionService.revision && LastRevisionService.revision.damages) {
              addDamagesToCanvas(LastRevisionService.revision.damages);
            }
          });
      }
    }

    function appendDamage() {
      var canvasItem = createCanvasItemObject(
        shape.id,
        vm.currentDamage.part.name,
        vm.currentDamage.damageType.name,
        shape.exportJSON({asString: true}),
        true
      );
      CarViewService.addDamageToCanvasComponents(canvasItem);
      resetCurrentObservation();
      shape = null;
    }

    function createCanvasItemObject(shapeId, part, damageType, json, isNew) {
      return {
        shapeId: shapeId,
        part: part,
        damage_type: damageType,
        json_canvas: json,
        is_new: isNew
      };
    }

    function resetCurrentObservation() {
      vm.currentDamage = {};
      vm.currentDamage.damageType = DAMAGE_TYPE_SELECTED;
      vm.currentDamage.part = SELECTED_PART;
    }
  }
})();
