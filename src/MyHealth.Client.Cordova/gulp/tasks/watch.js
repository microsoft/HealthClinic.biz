var paths = require('../options/paths.js');

module.exports = function (gulp) {
    gulp.task('watch', function () {
        gulp.watch(paths.site_sass_to_watch, ['sass:site']);
        gulp.watch(paths.ionic_sass, ['sass:ionic']);
        gulp.watch(paths.src.images, ['copy:images']);
        gulp.watch(paths.src.templates, ['copy:templates']);
        gulp.watch(paths.src.index, ['copy:index']);
        gulp.watch(paths.src.typescript, ['ts:transpile']);
        gulp.watch(paths.src.typescript, ['lint:ts']);
    });
}
