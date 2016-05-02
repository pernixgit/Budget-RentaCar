(function() {
'use strict';

angular
    .module('budgetrentacar.tireRevision')
    .constant('SELECTED_TIRES', [
      {rightFrontTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {leftFrontTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {leftBackTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {rightBackTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {extraTireSelectedOption: {id: '1', name: 'Bridgestone'}}
    ])
    .constant('TIRE_BRANDS', [
      {id: '0', name: 'Dunlop'},
      {id: '1', name: 'Bridgestone'},
      {id: '2', name: 'Yokohama'},
      {id: '3', name: 'Firestone'},
      {id: '4', name: 'Pirelli'},
      {id: '5', name: 'Kumho'},
      {id: '6', name: 'Hankook'},
      {id: '7', name: 'Goodyear'},
      {id: '8', name: 'Michelin'},
      {id: '9', name: 'Toyo'},
      {id: '10', name: 'Maxxis'},
      {id: '11', name: 'Otros'}
    ]);
})();

