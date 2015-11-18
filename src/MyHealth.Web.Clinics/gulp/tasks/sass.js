var paths = require('../options/paths');

var concat = require("gulp-concat");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

module.exports = function (gulp) {
    
    gulp.task('sass', function () {
        gulp.src(paths.css.source)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.css.dest));
    });

    gulp.task('sass:min', function () {
        gulp.src(paths.css.source)           
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.css.dest));
    });
    
    gulp.task('sass:watcher', ['sass'], function () {
        gulp.watch(paths.css.source, ['sass']);
    });

};
