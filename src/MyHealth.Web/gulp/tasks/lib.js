// Tasks for handling external libraries (mostly of them handled by bower)

var paths = require('../options/paths');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');
var gutil = require('gulp-util');

module.exports = function (gulp) {

    gulp.task('lib:js', function () {
        gulp.src(mainBowerFiles('**/*.js'))
            .pipe(concat(paths.dest.libJs + paths.dest.files.libJs))
            .pipe(gulp.dest('.'));
    });

    gulp.task('lib:min:js', function () {
        gulp.src(mainBowerFiles('**/*.js'))
            .pipe(concat(paths.dest.libJs + paths.dest.files.libJsMin))
            .pipe(uglify().on('error', gutil.log))
            .pipe(gulp.dest('.'));
    });

    gulp.task('lib', ['lib:js']);
    gulp.task('lib:min', ['lib:min:js']);
};