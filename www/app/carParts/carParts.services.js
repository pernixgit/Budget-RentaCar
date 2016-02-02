(function() {
	'use strict';

	angular
		.module('budgetrentacar.carParts')
		.service('CarPartsService', FirebaseService);

		FirebaseService.$inject = ['$firebaseObject'];
		function FirebaseService($firebaseObject){
			var _model = {
				rootRef : new Firebase('https://budgetest.firebaseio.com/'),
				pushNewItems: pushNewItems,
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
			_model.pathRef = _model.rootRef.child('revisions').child("56456165").child("car-parts");
			
		return _model


		function pushNewItems(){
			_model.pathRef.set(_model.items);
		}		

	}
})()