var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css');

var jsSrc = 'app/js/*.js',
	jsDest = 'dist/js',
	cssSrc = 'app/css/*.css',
	cssDest = 'dist/css';
	
	gulp.task('scripts', function(){
		return gulp.src(jsSrc)
			.pipe(concat('scripts.js'))
			.pipe(gulp.dest(jsDest))
			.pipe(rename('scripts.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest(jsDest));
	});
	gulp.task('styles', function(){
		return gulp.src(cssSrc)
			.pipe(concat('styles.css'))
			.pipe(gulp.dest(cssDest))
			.pipe(rename('styles.min.css'))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(cssDest));
	});
