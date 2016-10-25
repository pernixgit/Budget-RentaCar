(function() {

  angular
    .module('app')
    .directive('budgetMvaInput', budgetMvaInput);

  function budgetMvaInput() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/input-mva/input-mva.html',
      controller: 'InputMVACtrl as vm',
      scope: true
    };

    return directive;
  }

})();
