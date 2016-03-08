(function() {
  'use strict';
  angular
    .module('budgetrentacar')
    .constant('FIREBASE_URL', 'https://budget-cr.firebaseio.com')
    .constant('FIREBASE_URL_TEST', 'https://boiling-torch-654.firebaseio.com')
    .constant('ITEMS', [
      {rightFrontTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {leftFrontTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {leftBackTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {rightBackTireSelectedOption: {id: '1', name: 'Bridgestone'}},
      {extraTireSelectedOption: {id: '1', name: 'Bridgestone'}}
     ])
    .constant('TIREBRANDS', [
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
	    {id: '10', name: 'Otros'},
    ]);
})();
