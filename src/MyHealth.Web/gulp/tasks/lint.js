var paths = require('../options/paths');
var eslint = require('gulp-eslint');

module.exports = function (gulp) {

    gulp.task('lint:es6', function () {
        return gulp.src(paths.lint.es6)
            .pipe(eslint())
            .pipe(eslint.format());
    });

    gulp.task('lint', ['lint:es6']);

};