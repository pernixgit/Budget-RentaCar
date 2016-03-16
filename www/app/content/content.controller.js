(function() {
  'use strict';

  angular
    .module('budgetrentacar.content')
    .controller('ContentController', ContentController);

  function ContentController() {
    var vm = this;

    vm.damageOptions = [
      {'id': '0', 'name': 'Golpe'},
      {'id': '1', 'name': 'Rayon'},
      {'id': '2', 'name': 'Camanance'},
      {'id': '3', 'name': 'Raspon'}
    ];
  }
})();
