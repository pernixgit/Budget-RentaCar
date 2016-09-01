(function() {
  'use strict';

  angular
    .module('budgetrentacar.carView')
    .controller('CanvasCtrl', CanvasCtrl);

  /* @ngInject */

  function CanvasCtrl($scope,
                      CarViewService,
                      $ionicPopup,
                      DAMAGE_OPTIONS,
                      DAMAGE_TYPE_SELECTED,
                      PARTS,
                      SELECTED_PART,
                      VEHICLE_4X2_URL,
                      VEHICLE_4X4_URL,
                      COLOR_CANVAS,
                      LastRevisionService,
                      CarInfoFirebaseService) {
    var vm = $scope;
    var shape = null;
    var layer = null;
    var scale = 0.3;
    vm.currentDamage = {};
    vm.percentages = {};
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
          text: '<i class="icon ion-close-round"></i>',
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
      var currentDamage = vm.currentDamage
        .damageType
        .name;

      if (currentDamage === 'Golpe') {
        drawDamage(event);
      } else if (currentDamage === 'Rayon') {
        drawScratch(event);
      } else if (currentDamage === 'Camanance') {
        drawDent(event);
      } else {
        drawBigScratch(event);
      }

      paper.view.update();
      setXandYPercentages(event.point);
    }

    function drawDamage(event) {
      event.point = getPoint(event);
      var line1 = new Path.Line([20, 20], [80, 80]);
      var line2 = new Path.Line([80, 20], [20, 80]);

      shape = new Group({
        children: [line1, line2],
        center: event.point,
        position: event.point,
        strokeColor: COLOR_CANVAS,
        strokeWidth: 5
      });
      shape.scale(scale, scale);
    }

    function drawScratch(event) {
      event.point = getPoint(event);
      shape = new Path.Line({
        from: [20, 50],
        to: [80, 50],
        center: event.point,
        position: event.point,
        strokeColor: COLOR_CANVAS,
        strokeWidth: 5
      });
      shape.scale(scale, scale);
    }

    function drawDent(event) {
      event.point = getPoint(event);
      shape = new Path.Ellipse({
        point: [20, 20],
        size: [80, 30],
        fillColor: COLOR_CANVAS,
        center: event.point,
        position: event.point,
        strokeColor: COLOR_CANVAS,
        strokeWidth: 5
      });
      shape.scale(scale, scale);
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
        strokeColor: COLOR_CANVAS,
        strokeWidth: 5
      });
      shape.scale(scale, scale);
    }

    function addDamagesToCanvas(damagesList) {
      for (var position = 0; position < damagesList.length; position++) {
        var damage = damagesList[position];
        var component = project._activeLayer.importJSON(damage.json_canvas);
        var isDamageNew = (CarViewService.damagesLoaded || damage.is_new) ? true : false;
        component.position.x = (parseFloat(damage.relative_cords.x_percentage) * (paper.view.size.width));
        component.position.y = (parseFloat(damage.relative_cords.y_percentage) * (paper.view.size.height));
        var canvasItem = null;

        canvasItem = createCanvasItemObject(
          project._activeLayer.children[position].id,
          damage.part,
          damage.damage_type,
          damage.json_canvas,
          isDamageNew,
          damage.relative_cords
        );
        CarViewService.addDamageToCanvasComponents(canvasItem);
      }
      paper.view.update();
      CarViewService.damagesLoaded = true;
    }

    function scaleImage(raster) {
      var heightScale = (paper.view.size.height / raster.height);
      var widthScale = (paper.view.size.width / raster.width);

      raster.scale(widthScale, heightScale);
    }

    function importCanvasJson() {
      setVehicleBackground();
      layer = new Layer();
      if (CarViewService.damagesLoaded || CarViewService.damages.length > 0) {
        var previousDamages = CarViewService.damages;
        CarViewService.resetDamages();
        addDamagesToCanvas(previousDamages);
      }else {
        LastRevisionService.fetchRevisionData()
          .then(function() {
            if (LastRevisionService.revision && LastRevisionService.revision.damages) {
              var damages = changeDamagesColorToYellow(LastRevisionService.revision.damages);
              addDamagesToCanvas(damages);
            }
          });
      }
    }

    function changeDamagesColorToYellow(damages) {
      var yellowColor = '[1, 1, 0.5]';
      return damages.map(function(damage) {
        damage.json_canvas = damage.json_canvas.replace(/\[0.92941,0.33333,0.01961\]/g, yellowColor);
        return damage;
      });
    }

    function appendDamage() {
      var canvasItem = createCanvasItemObject(
        shape.id,
        vm.currentDamage.part.name,
        vm.currentDamage.damageType.name,
        shape.exportJSON({asString: true}),
        true,
        vm.percentages
      );
      CarViewService.addDamageToCanvasComponents(canvasItem);
      resetCurrentDamage();
      shape = null;
    }

    function createCanvasItemObject(shapeId, part, damageType, json, isNew, relativeCords) {
      return {
        shapeId: shapeId,
        part: part,
        damage_type: damageType,
        json_canvas: json,
        is_new: isNew,
        relative_cords: relativeCords
      };
    }

    function resetCurrentDamage() {
      vm.currentDamage = {};
      vm.currentDamage.damageType = DAMAGE_TYPE_SELECTED;
      vm.currentDamage.part = SELECTED_PART;
    }

    function getPoint(event) {
      var fixedX = event.x - 10;
      var fixedY = event.y - 65;
      return new Point(fixedX, fixedY);
    }

    function setXandYPercentages(point) {
      vm.percentages = {
        x_percentage: (point.x / paper.view.size.width),
        y_percentage: (point.y / paper.view.size.height)
      };
    }

    function setVehicleBackground() {
      var raster = null;
      var tractionType = CarInfoFirebaseService.carInfo.traction_type;
      var vehicleURL = (tractionType === '4x4') ? VEHICLE_4X4_URL : VEHICLE_4X2_URL;

      raster = new paper.Raster({
        ource: vehicleURL,
        position: paper.view.center
      });

      raster.onLoad = function() {
        scaleImage(raster);
      };
    }
  }
})();
