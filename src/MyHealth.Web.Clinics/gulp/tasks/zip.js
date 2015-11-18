var paths = require('../options/paths');

var path = require('path');
var zip = require('gulp-zip');
var minimist = require('minimist');
var fs = require('fs');
var basePath = process.cwd();

var knownOptions = {
    string: 'packageName',
    string: 'packagePath',
    default: { packageName: "package.zip", packagePath: path.join(basePath, '_package') }
};

var options = minimist(process.argv.slice(2), knownOptions);

module.exports = function (gulp) {
    gulp.task('zip', function () {  
         
        var packagePaths = ['**',
            '!**/_package/**',
            '!**/typings/**',
            '!typings',
            '!_package',
            '!gulpfile.js'];
        
        //add exclusion patterns for all dev dependencies
        
        var pathJSON = path.join(basePath, 'package.json');
        var packageJSON = JSON.parse(fs.readFileSync(pathJSON, 'utf8'));
        
        var devDeps = packageJSON.devDependencies;
        
        for (var propName in devDeps) {
            var excludePattern1 = "!**/node_modules/" + propName + "/**";
            var excludePattern2 = "!**/node_modules/" + propName;
            packagePaths.push(excludePattern1);
            packagePaths.push(excludePattern2);
        }
        
        return gulp.src(packagePaths)
        .pipe(zip(options.packageName))
        .pipe(gulp.dest(options.packagePath));
    });
};









