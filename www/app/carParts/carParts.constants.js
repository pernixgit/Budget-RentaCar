(function() {
  'use strict';
  angular
    .module('budgetrentacar.carParts')
    .constant('ACCESORIES', [
      {'name': 'Antena', 'key': 'antenna'},
      {'name': 'Documentos Legales' , 'key': 'legal-documents'},
      {'name': 'Emblemas', 'key': 'emblems'},
      {'name': 'Herramientas' , 'key': 'tools'},
      {'name': 'Kit de emergencia' , 'key': 'emergency-kit'},
      {'name': 'Llanta de repuesto', 'key': 'back-up-tire'},
      {'name': 'Placas' , 'key': 'plates'},
      {'name': 'Rack', 'key': 'rack'},
      {'name': 'Alfombras' , 'key': 'carpet'}
    ])
    .constant('SELECTED_ACCESORIES', {
      'antenna': true,
      'legal-documents': true,
      'emblems': true,
      'tools': true,
      'emergency-kit': true,
      'back-up-tire': true,
      'plates': true,
      'rack': false,
      'carpet': true
    });
})();
