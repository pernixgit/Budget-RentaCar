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
    .constant('DAMAGE_TYPE_SELECTED', {'id': '0', 'name': 'Golpe'})
    .constant('SELECTED_PART', {'id': '0', 'name': 'Bumper Delantero'})
    .constant('PARTS', [
      {'id': '0', 'name': 'Bumper Delantero'},
      {'id': '1', 'name': 'Bumper Trasero'},
      {'id': '2', 'name': 'Puerta Derecha Delantera'},
      {'id': '3', 'name': 'Puerta Derecha Trasera'},
      {'id': '4', 'name': 'Puerta Izquierda Trasera'},
      {'id': '5', 'name': 'Puerta Izquierda Delantera'},
      {'id': '6', 'name': 'Parabrisas, Ventana Trasera'},
      {'id': '7', 'name': 'Ventana Derecha Delantera'},
      {'id': '8', 'name': 'Ventana Derecha Trasera'},
      {'id': '9', 'name': 'Ventana Izquierda Trasera'},
      {'id': '10', 'name': 'Ventana Izquierda Delantera'},
      {'id': '11', 'name': 'Retrovisor Derecho'},
      {'id': '12', 'name': 'Retrovisor Izquierdo'},
      {'id': '13', 'name': 'Aro Delantero Izquierdo'},
      {'id': '14', 'name': 'Aro Trasero Izquierdo'},
      {'id': '15', 'name': 'Aro Delentero Derecho'},
      {'id': '16', 'name': 'Faro Derecho Delentero'},
      {'id': '17', 'name': 'Faro Izquierdo Delantero'},
      {'id': '18', 'name': 'Faro Derecho Trasero'},
      {'id': '19', 'name': 'Faro Izquierdo Trasero'},
      {'id': '18', 'name': 'Techo'},
      {'id': '19', 'name': 'Otros'},
    ]);
})();
