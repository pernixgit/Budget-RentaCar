var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var sh = require('shelljs');
var Server = require('karma').Server;
var jscs = require('gulp-jscs');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('test', function(done) { 
  new Server({ 
    configFile: __dirname + '/karma.conf.js', 
    singleRun: true }, done).start(); 
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('validate', function(){
  return gulp.src('www/app/**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('build-index', function() {
  var target = gulp.src('./www/index.html');
  var sources = gulp.src(['./www/app/app.module.js',
                          './www/app/core/core.module.js',
                          './www/app/**/*.module.js',
                          './www/app/**/*.js',
                          './www/styles/*.css'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
      .pipe(gulp.dest('./www'));

});
