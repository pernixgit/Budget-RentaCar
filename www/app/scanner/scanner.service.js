(function() {
  'use strict';

  angular
    .module('budgetrentacar.scanner')
    .service('ScannerService', ScannerService);

  ScannerService.$inject = [];

  function ScannerService() {
    var service = {
      code: '',
      setCode: setCode,
      getCode: getCode
    };

    return service;

    function setCode(data) {
      service.code = data.toString();
    }

    function getCode() {
      return service.code;
    }
  }
})();
