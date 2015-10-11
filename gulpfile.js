var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	minify = require('gulp-minify-css'),
	print = require('gulp-print'),
	ngAnnotate = require('gulp-ng-annotate'),
	sourcemaps = require('gulp-sourcemaps');
//	mainBowerFiles = require('main-bower-files');

gulp.task('default', ['css', 'lib', 'js', 'img', 'admin_lib', 'admin_js', 'admin_css', 'watch'], function(){

});

gulp.task('watch', function() {

	gulp.watch(['src/css/admin/**/*.less'], function() {
		setTimeout(function () {
            gulp.start('admin_css');
        }, 500);
	});

	gulp.watch(['src/js/admin/**/*.js'], function() {
		setTimeout(function () {
            gulp.start('admin_js');
        }, 500);
	});

	gulp.watch(['src/css/app/**/*.less'], function() {
		setTimeout(function () {
            gulp.start('css');
        }, 500);
	});

	gulp.watch(['src/js/app/**/*.js'], function() {
		setTimeout(function () {
            gulp.start('js');
        }, 500);
	});

	gulp.watch(['bower_components/**/*.js'], function() {
		setTimeout(function () {
            gulp.start('lib');
            gulp.start('admin_lib');
        }, 500);
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
		'src/css/app/**/*.less'
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
		'bower_components/angular-bootstrap/ui-bootstrap.min.js',
		'bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js'
	])
		.pipe(print())
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('js', function () {

	return gulp.src([
		'src/js/app/**/*.js'
	])
		.pipe(sourcemaps.init())
		.pipe(print())
		.pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('admin_lib', function () {

	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap/js/bootstrap.min.js',
		'bower_components/angular/angular.min.js',
		'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
		'bower_components/angular-resource/angular-resource.min.js',
		'bower_components/angular-route/angular-route.min.js',
		'bower_components/ng-file-upload/ng-file-upload-all.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/textAngular/dist/textAngular-sanitize.min.js',
		'bower_components/textAngular/dist/textAngular.min.js',
		'bower_components/textAngular/dist/textAngular-rangy.min.js',
		'bower_components/angular-growl/build/angular-growl.min.js'
	])
		.pipe(print())
		.pipe(concat('lib.js.erb'))
		.pipe(gulp.dest('app/views/aplication/'));
});

gulp.task('admin_js', function () {

	return gulp.src([
		'src/js/admin/**/*.js'
	])
		.pipe(sourcemaps.init())
		.pipe(print())
		.pipe(ngAnnotate())
		.pipe(concat('app.js.erb'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('app/views/aplication/'));
});

gulp.task('admin_css', function () {

	return gulp.src([
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/textAngular/dist/textAngular.css',
		'bower_components/angular-growl/build/angular-growl.min.css',
		'src/css/admin/**/*.less',
	])
		.pipe(print())
		.pipe(less())
		.pipe(concat('admin.css'))
		.pipe(minify())
		.pipe(gulp.dest('public/css'));
});