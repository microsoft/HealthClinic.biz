var paths = require('../options/paths');
rimraf = require('rimraf');

module.exports = function (gulp) {

    gulp.task('clean:js', function (cb) {
        rimraf(paths.dest.js, cb);
    });

    gulp.task('clean:lib:js', function (cb) {
        rimraf(paths.dest.libJs, cb);
    });

    gulp.task('clean:css', function (cb) {
        rimraf(paths.dest.css, cb);
    });

    gulp.task('clean:lib:css', function (cb) {
        rimraf(paths.dest.libCss, cb);
    });

    gulp.task('clean:app', function (cb) {
        rimraf(paths.dest.spa.root, cb);
    });

    gulp.task('clean:images', function (cb) {
        rimraf(paths.dest.images, cb);
    });

    gulp.task('clean:lib', ['clean:lib:js', 'clean:lib:css']);
    gulp.task('clean', ['clean:images', 'clean:js', 'clean:css', 'clean:lib', 'clean:app']);
};