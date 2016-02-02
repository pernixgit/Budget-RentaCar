(function() {
	'use strict';

	angular
		.module('budgetrentacar.extraParts')
		.service('ExtraPartsService', FirebaseService);

		FirebaseService.$inject = ['$firebaseObject'];
		function FirebaseService($firebaseObject){
			var _model = {
				rootRef : new Firebase('https://budgetest.firebaseio.com/'),
				pushNewItems: pushNewItems,
				items: {
        'CSS' : false,
        'AET' : false,
        'GPS' : false,
        'WFI' : false
      	}
			}
			_model.pathRef = _model.rootRef.child('revisions').child("56456165").child("additional-products");
			
		return _model


		function pushNewItems(){
			_model.pathRef.set(_model.items);
		}		

	}
})()