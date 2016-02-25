(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner')
    .service('ScannerService', ScannerService);

  ScannerService.$inject = [];

  function ScannerService() {

    this.code = '';
    this.setCode = function(data) {
      this.code = parseInt(data).toString();
    };

    this.getCode = function() {
      return this.code;
    };

    return this;
  }
})();
