module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
       
      './www/lib/angular/angular.min.js',
      './www/lib/angular-mocks/angular-mocks.js',
      './www/lib/angular-animate/angular-animate.min.js',
      './www/lib/angular-sanitize/angular-sanitize.min.js',
      './www/lib/ionic/js/ionic.bundle.js', 
      './www/lib/angular-ui-router/release/angular-ui-router.min.js',
      'https://cdn.firebase.com/js/client/2.2.4/firebase.js',
      'https://cdn.firebase.com/libs/angularfire/1.1.3/angularfire.min.js',
      

      './www/app/app.module.js',      
      './www/app/app.config.js',
      './www/app/app.routes.js',
      './www/app/app.run.js',

      './www/app/**/*.module.js',
      './www/app/**/*.js',
      './tests/specs/**/*.spec.js',
    ],

    exclude: ['./www/app/paper-lib'],

    preprocessors: {
        './www/app/**/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
    },


    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
