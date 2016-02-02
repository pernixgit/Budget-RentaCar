(function() {
	'use strict';

	angular
		.module('budgetrentacar.carParts')
		.service('CarPartsService', FirebaseService);

		FirebaseService.$inject = ['$firebaseObject','CarInfoFirebaseService'];
		function FirebaseService($firebaseObject,CarInfoFirebaseService){
			var _model = {
				rootRef : new Firebase('https://budgetest.firebaseio.com/'),
				pushNewItems: pushNewItems,
				RevisionId: null,
				items: {
        			'antenna' : false,
        			'legal-documents' : false,
			        'emblems' : false,
			        'tools' : false,
			        'emergency-kit' : false,
			        'back-up-tire' : false,
			        'plates' : false,
			        'rack' : false,
			        'air-conditioner-grids' : false,
			        'carpet' : false
			     }
			}
			_model.RevisionId = CarInfoFirebaseService.currentRevisionId;
			_model.pathRef = _model.rootRef.child('revisions').child(_model.RevisionId).child("car-parts");
			
		return _model

		function pushNewItems(){
			_model.pathRef.set(_model.items);
		}		

	}
})()