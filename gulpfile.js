var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	minify = require('gulp-minify-css'),
	print = require('gulp-print'),
	ngAnnotate = require('gulp-ng-annotate');
//	mainBowerFiles = require('main-bower-files');

gulp.task('default', ['css', 'js', 'img', 'watch'], function(){

});

gulp.task('watch', function() {

	gulp.watch(['public/css/app/**/*.less'], function() {
		setTimeout(function () {
            gulp.start('css');
        }, 500);
	});

	gulp.watch(['public/js/app/**/*.js'], function() {
		setTimeout(function () {
            gulp.start('js');
        }, 300);
	});

	gulp.watch(['bower_components/**/*.js'], function() {
		setTimeout(function () {
            gulp.start('lib');
        }, 300);
	});
});

gulp.task('img', function () {
  
	return gulp.src([
		'bower_components/bootstrap/img/*.png'
	])
		.pipe(gulp.dest('public/img'));
});

gulp.task('css', function () {

	return gulp.src([
		'public/css/app/**/*.less'
	])
		.pipe(print())
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(minify())
		.pipe(gulp.dest('public/css'));
});

gulp.task('lib', function () {

	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		//'bower_components/bootstrap/js/*.js',
		'bower_components/angular/**/*.min.js',
		'bower_components/angular-route/**/*.min.js',
		'bower_components/angular-sanitize/**/*.min.js',
		'bower_components/angular-bootstrap/ui-bootstrap.min.js'
	])
		.pipe(print())
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('js', function () {

	return gulp.src([
		'public/js/app/**/*.js'
	])
		.pipe(print())
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});