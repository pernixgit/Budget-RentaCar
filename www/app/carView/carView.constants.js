(function() {
'use strict';

angular
    .module('budgetrentacar.carView')
    .constant('DAMAGE_OPTIONS', [
      {'id': '0', 'name': 'Golpe'},
      {'id': '1', 'name': 'Rayon'},
      {'id': '2', 'name': 'Camanance'},
      {'id': '3', 'name': 'Raspon'}
    ])
    .constant('COLOR_CANVAS': '#ED5505')
    .constant('DAMAGE_TYPE_SELECTED', {'id': '0', 'name': 'Golpe'})
    .constant('SELECTED_PART', {'id': '0', 'name': 'Bumper Delantero'})
    .constant('PARTS', [
      {'id': '0', 'name': 'Bumper Delantero'},
      {'id': '1', 'name': 'Bumper Trasero'},
      {'id': '2', 'name': 'Puerta Derecha Delantera'},
      {'id': '3', 'name': 'Puerta Derecha Trasera'},
      {'id': '4', 'name': 'Puerta Izquierda Trasera'},
      {'id': '5', 'name': 'Puerta Izquierda Delantera'},
      {'id': '6', 'name': 'Parabrisas'},
      {'id': '7', 'name': 'Ventana Trasera'},
      {'id': '8', 'name': 'Ventana Derecha Delantera'},
      {'id': '9', 'name': 'Ventana Derecha Trasera'},
      {'id': '10', 'name': 'Ventana Izquierda Trasera'},
      {'id': '11', 'name': 'Ventana Izquierda Delantera'},
      {'id': '12', 'name': 'Retrovisor Derecho'},
      {'id': '13', 'name': 'Retrovisor Izquierdo'},
      {'id': '14', 'name': 'Aro Delantero Izquierdo'},
      {'id': '15', 'name': 'Aro Trasero Izquierdo'},
      {'id': '16', 'name': 'Aro Delentero Derecho'},
      {'id': '17', 'name': 'Faro Derecho Delentero'},
      {'id': '18', 'name': 'Faro Izquierdo Delantero'},
      {'id': '19', 'name': 'Faro Derecho Trasero'},
      {'id': '20', 'name': 'Faro Izquierdo Trasero'},
      {'id': '21', 'name': 'Guardabarros delantero'},
      {'id': '21', 'name': 'Guardabarros trasero'},
      {'id': '21', 'name': 'Compuerta Trasera'},
      {'id': '21', 'name': 'Estribo'},
      {'id': '21', 'name': 'Tapa de motor'},
      {'id': '21', 'name': 'Cajuela'},
      {'id': '21', 'name': 'Techo'},
      {'id': '22', 'name': 'Otros'}
    ])
  .constant({'VEHICLE_4X2_URL': 'assets/images/canvasCar4x2.png'})
  .constant({'VEHICLE_4X4_URL': 'assets/images/canvasCar4x4.png'});
})();
