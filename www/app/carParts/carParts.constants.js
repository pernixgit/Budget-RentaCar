(function() {
  'use strict';
  angular
    .module('budgetrentacar.carParts')
    .constant('ACCESORIES', [
      {'name': 'Antena', 'key': 'antenna'},
      {'name': 'Documentos Legales' , 'key': 'legal_documents'},
      {'name': 'Emblemas', 'key': 'emblems'},
      {'name': 'Herramientas' , 'key': 'tools'},
      {'name': 'Kit de emergencia' , 'key': 'emergency_kit'},
      {'name': 'Placas' , 'key': 'plates'},
      {'name': 'Rack', 'key': 'rack'},
      {'name': 'Alfombras' , 'key': 'carpet'},
      {'name': 'Tapa de motor', 'key': 'hood'},
      {'name': 'Cajuela', 'key': 'trunk'},
      {'name': 'Copas', 'key': 'hubcaps'},
      {'name': 'Guardabarros delantero', 'key': 'front_mudflaps'},
      {'name': 'Guardabarros trasero', 'key': 'rear_mudflaps'},
      {'name': 'Compuerta Trasera', 'key': 'rear_hatch'},
      {'name': 'Estribo', 'key': 'foot_rail'}
    ])
    .constant('SELECTED_ACCESORIES', {
      'antenna': true,
      'legal_documents': true,
      'emblems': true,
      'tools': true,
      'emergency_kit': true,
      'plates': true,
      'rack': false,
      'carpet': true,
      'hood': true,
      'trunk': true,
      'hubcaps': true,
      'front_mudflaps': true,
      'rear_mudflaps': true,
      'rear_hatch': true,
      'foot_rail': true
    });
})();
