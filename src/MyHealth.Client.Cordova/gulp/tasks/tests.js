var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true });

module.exports = function (gulp) {

    gulp.task('test', ['typescript-tests'], function () {
        // When executing this task from gulp, this files overrides the
        // files configuration in tests/karma.conf.js
        var files = [
                'tests/phantomBindPolyfill.js',
                'tests/out/**/*.spec.js'
        ];
        return gulp.src(files)
            .pipe($.karma({
                configFile: './tests/karma.conf.js',
                action: 'run'
            }))
            .on('error', function (err) {
                throw err;
            });
    });

    gulp.task('typescript-tests', ['clean-typescript-tests'], function () {
        var options = {
            target: 'ES5',
        };
        return gulp.src(['./tests/**/*.ts'])
            .pipe($.tsc(options))
            .pipe(gulp.dest('./tests/out'));
    });

    gulp.task('clean-typescript-tests', function (done) {
        clean('./tests/out', done);
    });

    ////////////

    function clean(path, done) {
        log('Cleaning: ' + $.util.colors.blue(path));
        del(path, done);
    }

    function log(msg) {
        if (typeof (msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.blue(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(msg));
        }
    }
}