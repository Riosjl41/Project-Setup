const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssImport = require('postcss-import');

//Compile scss into css
function style () {
	return gulp
		.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(postcss([ cssImport, autoprefixer ]))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream())
		.pipe(sass().on('error', sass.logError));
}

function watch () {
	browserSync.init({
		server : {
			baseDir : './app'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
