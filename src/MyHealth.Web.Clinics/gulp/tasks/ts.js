var paths = require('../options/paths');

var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');


module.exports = function (gulp) {
    
    gulp.task('ts', function () {
        
        gulp.src(paths.ts.source)
            .pipe(sourcemaps.init())  
            .pipe(ts())
            .pipe(concat(paths.ts.destFile))            
            .pipe(sourcemaps.write())  
            .pipe(gulp.dest(paths.ts.destPath));
      
    });
    
    gulp.task('ts:min', function () {
  
         gulp.src(paths.ts.source)
            .pipe(sourcemaps.init())             
            .pipe(ts())            
            .pipe(concat(paths.ts.destFile))
            .pipe(ngAnnotate())
            .pipe(uglify()) 
            .pipe(sourcemaps.write())  
            .pipe(gulp.dest(paths.ts.destPath));
    });
    
    gulp.task('ts:watcher', ['ts'], function () {
        gulp.watch(paths.ts.source, ['ts']);
        gulp.watch(paths.ts.source, ['ts:lint']);
    });

};
