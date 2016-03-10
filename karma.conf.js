module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './www/lib/ionic/js/ionic.bundle.min.js',
      './www/lib/angular-ui-router/release/angular-ui-router.min.js',
      './www/lib/angular-mocks/angular-mocks.js',
      './www/lib/firebase/firebase.js',
      './www/lib/angularfire/dist/angularfire.min.js',
      './www/lib/angular-animate/angular-animate.min.js',
      './www/lib/angular-sanitize/angular-sanitize.min.js',
      './www/app/**/*.module.js',
      './www/app/**/*.js',
      './www/app/*.js',
      './tests/specs/**/*.spec.js'
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
};
