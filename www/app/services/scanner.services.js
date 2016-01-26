(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner')
    .service('ScannerService', ScannerService);

    ScannerService.$inject = [];

    function ScannerService(){
      this.code = "";
        this.setCode = function(data)
      {
        this.code = data;
      };
        this.getCode = function() {
          return this.code;
        };
      return this;
    };
})();
