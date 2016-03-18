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
      {'name': 'Llanta de repuesto', 'key': 'spare_tire'},
      {'name': 'Placas' , 'key': 'plates'},
      {'name': 'Rack', 'key': 'rack'},
      {'name': 'Alfombras' , 'key': 'carpet'}
    ])
    .constant('SELECTED_ACCESORIES', {
      'antenna': true,
      'legal_documents': true,
      'emblems': true,
      'tools': true,
      'emergency_kit': true,
      'spare_tire': true,
      'plates': true,
      'rack': false,
      'carpet': true
    });
})();
