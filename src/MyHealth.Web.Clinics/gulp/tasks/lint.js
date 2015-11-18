var paths = require('../options/paths');

var tslint = require('gulp-tslint');

module.exports = function (gulp) {
    
    gulp.task('ts:lint', function () {
        return gulp.src(paths.ts.source)
            .pipe(tslint())
            .pipe(tslint.report("prose", {
                emitError: false,
                summarizeFailureOutput: true
            }));
    });
    
};
