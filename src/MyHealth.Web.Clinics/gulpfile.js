var gulp = require("gulp");

require('./gulp/tasks/sass')(gulp);
require('./gulp/tasks/zip')(gulp);
require('./gulp/tasks/ts')(gulp);
require('./gulp/tasks/lint')(gulp);

gulp.task('init', ['sass', 'ts']);
gulp.task('debug', ['sass:watcher', 'ts:watcher']);
gulp.task('release', ['sass:min', 'ts:min', 'zip']);

gulp.task('default', ['init']);

