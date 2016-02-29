var util = require('util');
var spawn = require('child_process').spawn;
var path = require('path');
var rimraf = require('rimraf');
var xml2js = require('xml2js');
var fs = require('fs');

module.exports = function (gulp) {
    gulp.task('build:ios', function (cb) {

        // Check if we're in MacOS
        if(process.platform !== 'darwin'){
            console.log('Not in Mac');
            cb();
            return;
        }

        // Remove platforms and plugins folder
        rimraf.sync('platforms/*');
        rimraf.sync('plugins/*');

        // Get plugin information from XML results
        var getPluginsInfo = function(callback){
            var plugins = [];
            // Get the plugins
            readConfigFile(function(result){
                result.widget['plugin'].forEach(function(item){
                    var plugin = item.$;
                    plugin.params = [];
                    if(item.param){
                        plugin.params = item.param.map(function(p){return p.$});
                    }
                    plugins.push(plugin);
                });
                callback(plugins);
            });
        }
        
        // Parse the file config.xml
        var parser = new xml2js.Parser();
        var readConfigFile = function(callback){
            fs.readFile('./config.xml', function(err,data){
                parser.parseString(data, function(err,result){
                    callback(result);
                });
            });
        }

        // Installs the plugins
        var installPlugins = function(callback){
            var pluginNameVersionVarsBundles = [];

            getPluginsInfo(function(plugins){

                plugins.forEach(function(item){
                    pluginNameVersionVarsBundles.push( item.src || (item.name+'@'+item.version));
                    item.params.forEach(function(param){
                        pluginNameVersionVarsBundles.push("--variable");
                        pluginNameVersionVarsBundles.push(param.name + "=" + param.value)
                    });
                });

                var args = ['plugins', 'add'].concat(pluginNameVersionVarsBundles);

                var s = spawn('cordova', args);

                s.stdout.on('data', function (data) {
                    console.log(data.toString());
                });

                s.stderr.on('data', function (data) {
                    console.log('ERR: ' + data);
                });

                s.on('error', function (err) {
                    console.log('SPAWN ERR: ' + JSON.stringify(err));
                });

                s.on('exit', function (code) {
                    callback();
                });

            });
        }

        // Adds the iOS platform
        var addPlatform = function(callback){
            var s = spawn('cordova', 'platform add ios'.split(' '));

            s.stdout.on('data', function (data) {
                console.log(data.toString());
            });

            s.stderr.on('data', function (data) {
                console.log('ERR: ' + data);
            });

            s.on('error', function (err) {
                console.log('SPAWN ERR: ' + JSON.stringify(err));
            });

            s.on('exit', function (code) {
                callback();
            });
        }

        // Run
        addPlatform(function(){
            installPlugins(function(){
                cb();
            });
        });
        
    });
}