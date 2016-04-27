(function() {

  angular
    .module('budgetrentacar')
    .directive('inputMva', inputMvaDirective);

  function inputMvaDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/input-mva/input-mva.html',
      controller: 'InputMVAController as vm',
      scope: true
    };

    return directive;
  }

})();
