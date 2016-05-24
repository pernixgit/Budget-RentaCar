(function() {
'use strict';

angular
    .module('budgetrentacar.tireRevision')
    .constant('SELECTED_TIRES', [
      {rightFrontTireSelectedOption: 'Bridgestone'},
      {leftFrontTireSelectedOption: 'Bridgestone'},
      {leftBackTireSelectedOption: 'Bridgestone'},
      {rightBackTireSelectedOption: 'Bridgestone'},
      {extraTireSelectedOption: 'Bridgestone'}
    ])
    .constant('TIRE_BRANDS', [
      'Dunlop',
      'Bridgestone',
      'Yokohama',
      'Firestone',
      'Pirelli',
      'Kumho',
      'Hankook',
      'Goodyear',
      'Michelin',
      'Toyo',
      'Maxxis',
      'Otros'
    ]);
})();

