module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './www/lib/ionic/js/ionic.bundle.js', 
      './bower_components/angular-ui-router/release/angular-ui-router.min.js',  
      './bower_components/angular-mocks/angular-mocks.js', 

      './bower_components/angular-animate/angular-animate.min.js',
      './bower_components/angular-sanitize/angular-sanitize.min.js',  

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
