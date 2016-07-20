/// <binding BeforeBuild='default' Clean='clean' />
var gulp = require('gulp');

require('./gulp/tasks/build.js')(gulp);
require('./gulp/tasks/clean.js')(gulp);
require('./gulp/tasks/copy.js')(gulp);
require('./gulp/tasks/lint.js')(gulp);
require('./gulp/tasks/preview.js')(gulp);
require('./gulp/tasks/sass.js')(gulp);
require('./gulp/tasks/watch.js')(gulp);
require('./gulp/tasks/typescript.js')(gulp);
require('./gulp/tasks/tests.js')(gulp);

gulp.task('default', ['sass', 'copy', 'ts:transpile']);
gulp.task('dev', ['sass', 'copy', 'lint:ts', 'ts:transpile', 'watch', 'preview']);


