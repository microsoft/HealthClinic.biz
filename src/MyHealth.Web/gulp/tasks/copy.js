var paths = require('../options/paths');

module.exports = function (gulp) {
    gulp.task('copy:img', function () {
        gulp.src(paths.source.images).
            pipe(gulp.dest(paths.dest.images));
    });

    gulp.task('copy:favicon', function () {
        gulp.src(paths.source.favicon).
            pipe(gulp.dest(paths.dest.favicon));
    });

    gulp.task('copy:font', function () {
        gulp.src(paths.source.fonts).
            pipe(gulp.dest(paths.dest.fonts));
    });

    gulp.task('copy', ['copy:img', 'copy:font', 'copy:favicon']);
};