(function() {
	'use strict';

	angular
		.module('budgetrentacar.extraParts')
		.service('ExtraPartsService', FirebaseService);

		FirebaseService.$inject = ['$firebaseObject','CarInfoFirebaseService'];
		function FirebaseService($firebaseObject,CarInfoFirebaseService){
			var _model = {
				rootRef : new Firebase('https://budgetest.firebaseio.com/'),
				pushNewItems: pushNewItems,
				RevisionId: null,
				items: {
        			'CSS' : false,
        			'AET' : false,
        			'GPS' : false,
        			'WFI' : false
      			}
			}
			_model.RevisionId = CarInfoFirebaseService.currentRevisionId;
			_model.pathRef = _model.rootRef.child('revisions').child(_model.RevisionId).child("additional-products");
			
		return _model

		function pushNewItems(){
			_model.pathRef.set(_model.items);
		}		
	}
})()