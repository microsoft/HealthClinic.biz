var paths = require('../options/paths.js');

var express = require('express');

module.exports = function (gulp) {
    gulp.task('copy:images', function () {
        gulp.src(paths.src.images).
            pipe(gulp.dest(paths.dest.images));
    });
    gulp.task('copy:templates', function () {
        gulp.src(paths.src.templates).
            pipe(gulp.dest(paths.dest.templates));
    });
    gulp.task('copy:index', function () {
        gulp.src(paths.src.index).
            pipe(gulp.dest(paths.dest.index));
    });
    gulp.task('copy:libs', function () {
        gulp.src(paths.src.libs).
            pipe(gulp.dest(paths.dest.libs));
    });
    gulp.task('copy:js', function () {
        gulp.src(paths.src.js).
            pipe(gulp.dest(paths.dest.js));
    });
    gulp.task('copy:fonts', function () {
        gulp.src(paths.src.fonts).
            pipe(gulp.dest(paths.dest.fonts));
    });
    gulp.task('copy:icomoon', function () {
        gulp.src(paths.src.icomoon_style).
            pipe(gulp.dest(paths.dest.icomoon_style));
        gulp.src(paths.src.icomoon_fonts).
            pipe(gulp.dest(paths.dest.icomoon_fonts));
    });
    gulp.task('copy', ['copy:images', 'copy:templates', 'copy:index', 'copy:libs', 'copy:js', 'copy:fonts', 'copy:icomoon']);
}