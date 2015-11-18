var rimraf = require('rimraf');

module.exports = function (gulp) {
    gulp.task('clean', function (cb) {
        rimraf.sync('bin');
        rimraf.sync('bld');
        rimraf.sync('platforms/*');
        rimraf.sync('plugins/*');
        rimraf.sync('content/lib/*');
    });
}