(function() {
'use strict';

angular
    .module('app.car-delivery')
    .constant('GAS_LEVELS', [
      {id: '0', name: 'Vacio'},
      {id: '1', name: '1/8'},
      {id: '2', name: '1/4'},
      {id: '3', name: '3/8'},
      {id: '4', name: '1/2'},
      {id: '5', name: '5/8'},
      {id: '6', name: '7/8'},
      {id: '7', name: 'Lleno'}
    ])
    .constant('GAS_LEVEL_SELECTED',{id: '0', name: 'Vacio'});
})();
