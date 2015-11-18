var paths = require('../options/paths');
var options = require('../options/transpile');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var ignore = require('gulp-ignore');
var gutil = require('gulp-util');

module.exports = function (gulp) {
    function transpileBase(options) {
        gutil.log('Babel transpilation options ', options);
        var stream = gulp.src(options.source)
          .pipe(sourcemaps.init())
          .pipe(babel());

        if (options.concat === true) {
            stream = stream.pipe(concat(options.target));
        }
        return stream;
    }

    function transpile(gulp, options) {
        // if options.concat is set to true destination has been set by gulp-concat
        console.log(options);
        var destination = options.concat === true ? '.' : options.target;
        transpileBase(options)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
    }

    function transpileMin(gulp, options) {
        // if options.concat is set to true destination has been set by gulp-concat
        var destination = options.concat === true ? '.' : options.target;
        transpileBase(options)
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(destination));
    }

    gulp.task('babel', function () {
        transpile(gulp, options.site);
    });

    gulp.task('babel:min', function () {
        transpileMin(gulp, options.siteMin);
    });
};