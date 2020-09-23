const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

function style() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
}

function watch() {
	browserSync.init({
	    server: {
            baseDir: "app",
            index: "home.html"
        }
	});

	gulp.watch('app/scss/**/*.scss', style);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync);
}

exports.style = style;
exports.watch = watch;