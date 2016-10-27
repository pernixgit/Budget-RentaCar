(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($translateProvider, 
                  $ionicCloudProvider, 
                  $ionicConfigProvider) {

    var translationsEN = {
      FeedbackTitle: 'Feedback',
      FeedbackQuestion1: 'Do you feel that you got a valuable service for the money you paid?',
      FeedbackQuestion2: 'How likely are you to recommend us ' +
                         'to a friend or colleague?',
      FeedbackQuestion3: 'In general, how would you rate our customer service?',
      FeedbackQuestion4: 'Would you use our service again?',
      FeedbackButtonSubmmit: 'Submit Feedback',
      FeedBackPlaceHolder1: 'What can we improve?',
      FeedBackPlaceHolder2: 'Why?',
      yes: 'Yes'
    };

    var translationsES = {
      FeedbackTitle: 'Retroalimentación',
      FeedbackQuestion1: '\u00BFSiente que el servicio que recibió está acorde con lo que pagó?',
      FeedbackQuestion2: '\u00BFQué probabilidades hay de que nos ' +
                         'recomiendes a un amigo o colega?',
      FeedbackQuestion3: '\u00BFEn general, cómo calificaría ' +
                         'el servicio al cliente?',
      FeedbackQuestion4: '\u00BFUsaría nuestro servicio de nuevo?',
      FeedbackButtonSubmmit: 'Enviar Feedback',
      FeedBackPlaceHolder1: '\u00BFQué podemos mejorar?',
      FeedBackPlaceHolder2: '\u00BFPor qué?',
      yes: 'Si'
    };

    $ionicCloudProvider.init({
      "core": {
        "app_id": "be75c74a"
      }
    });

    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.translations('EN', translationsEN);
    $translateProvider.translations('ES', translationsES);
    $translateProvider.preferredLanguage('ES');
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
  }
})();
