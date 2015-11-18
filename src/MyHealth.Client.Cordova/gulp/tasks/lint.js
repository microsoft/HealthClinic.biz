var paths = require('../options/paths.js');
var tslint = require('gulp-tslint');

module.exports = function (gulp) {
    gulp.task('lint:ts', function () {
        return gulp.src(paths.src.typescript_lint)
            .pipe(tslint())
            .pipe(tslint.report('prose', {
                emitError: false,
                summarizeFailureOutput: true
            }));
    });
}