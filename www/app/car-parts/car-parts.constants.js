(function() {
  'use strict';
  angular
    .module('app.car-parts')
    .constant('ACCESORIES', [
      {'name': 'Antena', 'key': 'antenna'},
      {'name': 'Documentos Legales' , 'key': 'legal_documents'},
      {'name': 'Herramientas' , 'key': 'tools'},
      {'name': 'Kit de emergencia' , 'key': 'emergency_kit'},
      {'name': 'Rack', 'key': 'rack'},
      {'name': 'Alfombras' , 'key': 'carpet'},
      {'name': 'Copas', 'key': 'hubcaps'}
    ])
    .constant('COUNTED_ACCESORIES', [
      {'name': 'Emblemas', 'key': 'emblems'},
      {'name': 'Placas', 'key': 'plates'}
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
      'hubcaps': true
    })
    .constant('SELECTED_COUNTED_ACCESORIES', {
      emblems: '2',
      plates: '2'
    });
})();
