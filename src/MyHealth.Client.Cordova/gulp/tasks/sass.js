var paths = require('../options/paths.js');

var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

module.exports = function (gulp) {
    gulp.task('sass:site', function (done) {
        gulp.src('./content/styles/site.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./www/css/'))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./www/css/'))
            .on('end', done);
    });
    gulp.task('sass:ionic', function (done) {
        gulp.src('./content/styles/ionic.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./www/css/'))
            .pipe(minifyCss({
                keepSpecialComments: 0
            }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./www/css/'))
            .on('end', done);
    });
    gulp.task('sass', ['sass:ionic', 'sass:site']);
}
