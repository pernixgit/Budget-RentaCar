(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner')
    .service('ScannerService', function(){
      this.code = "";
      this.setCode = function(data)
      {
        this.code = data;
      };
      this.getCode = function() {
          return this.code;
      };
    return this;
  });
})();