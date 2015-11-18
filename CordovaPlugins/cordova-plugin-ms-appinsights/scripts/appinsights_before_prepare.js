/*
Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved.
Licensed under the Apache License, Version 2.0.  See License.txt in the project root for license information.
*/

/*jshint node: true*/

module.exports = function (ctx) {

    var ConfigParser = ctx.requireCordovaModule('../configparser/ConfigParser');
    var path = ctx.requireCordovaModule('path');
    var shell = ctx.requireCordovaModule('shelljs');

    var pluginConfigFile = path.resolve(ctx.opts.plugin.dir, 'www', 'AppInsights.js');
    var projectConfigXml = new ConfigParser(path.join(ctx.opts.projectRoot, 'config.xml'));
    var instrKey = projectConfigXml.getGlobalPreference('instrumentation_key');

    console.log("Replacing 'instrumentationKey' parameter in plugin");

    if (instrKey) {
        // replace instrumentation key stub with provided value
        console.log("Replacing 'instrumentationKey' parameter in plugin");
        shell.sed('-i',
            /instrumentationKey:\s"(.*?)"/g,
            'instrumentationKey: "' + instrKey + '"',
            pluginConfigFile);
    }
};
