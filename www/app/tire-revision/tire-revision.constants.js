(function() {
'use strict';

angular
    .module('app.tire-revision')
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

