var paths = require('../options/paths.js');

var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp) {
    gulp.task('ts:transpile', function () {

        var tsResult = gulp.src(paths.src.typescript, { base: './www/scripts' })
            .pipe(sourcemaps.init())
            .pipe(ts({
                out: 'app.js',
                noImplicitAny: false,
                noEmitOnError: true,
                removeComments: true
            }));

        return tsResult.js
            .pipe(sourcemaps.write('./', {
                includeContent: false,
                sourceRoot: '../../content/app/'
            }))
            .pipe(gulp.dest(paths.dest.typescript));

    });
}