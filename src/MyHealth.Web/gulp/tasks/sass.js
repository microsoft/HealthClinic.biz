var paths = require('../options/paths');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

module.exports = function (gulp) {
    gulp.task('sass', function () {
        gulp.src(paths.source.sass.files)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.dest.css));
    });

    gulp.task('sass:min', function () {
        gulp.src(paths.source.sass.files)
             .pipe(rename({
                 suffix: '.min'
             }))
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.dest.css));
    });

    gulp.task('sass:watcher', function () {
        gulp.watch(paths.source.sass.files, ['sass']);
    });
};