var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
//var jshint = require('gulp-jshint');

gulp.task('minify-css', function() {
	return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css',
					 './lib/**/*.css'])
					 .pipe(concat('app.css'))
					 .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function() {
	gulp.src(['./node_modules/angular/angular.js',
			  './node_modules/jquery/dist/jquery.min.js',
		      './node_modules/bootstrap/dist/js/bootstrap.min.js',
			  './node_modules/angular-route/angular-route.min.js',
			  './lib./scripts./config.js',
			  './lib/**/*.js',
			  './lib/**/**/*.js'])
			  .pipe(plumber())
			  .pipe(concat('app.js'))
			  .pipe(uglify())
			  .pipe(gulp.dest('./dist'));
});

// gulp.task('lint', function() {
//   return gulp.src('./lib/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('default', ['minify-css', 'uglify']);

gulp.task('watch', function () {
    watch(['**/*.js', '**/*.css'], batch(function (events, done) {
        gulp.start('default', done);
    }));
});