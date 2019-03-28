const gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

//Compile scss into css
function style () {
	return gulp
		.src('./scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream())
		.pipe(sass().on('error', sass.logError));
}

function watch () {
	browserSync.init({
		server : {
			baseDir : './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
