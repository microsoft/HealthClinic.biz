
/*
Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved.
Licensed under the Apache License, Version 2.0.  See License.txt in the project root for license information.
*/

/*global module*/

var appInsightsConfig = {
    // To override this stub there is a three ways
    // * pass --variable INSTRUMENTATION_KEY=<your_key> to `cordova plugin add` command
    //      - THIS DOESN'T WORK YET DUE TO ISSUE WITH CORDOVA-LIB
    //
    // * add <preference name="instrumentation_key" value="<your_key>"> to config.xml at the root of project
    // * update this file manually
    instrumentationKey: "PASTE_YOUR_KEY_HERE_!!!",
    // Need to specify this explicitly, because default value doesn't provide URL scheme
    endpointUrl: "https://dc.services.visualstudio.com/v2/track"
};

document.addEventListener("deviceready", function () {
    // When and if device plugin is initialized, set up the device context
    if (device && appInsights && appInsights.context && appInsights.context.device) {
        appInsights.context.device.osversion = device.version;
        appInsights.context.device.os = device.platform;
        appInsights.context.device.model = device.model;
        appInsights.context.device.id = device.uuid;
    }
});

// Capture unhandled exceptions which are reported as crashes
var originalOnError = window.onerror;
window.onerror = function (message, url, lineNumber, columnNumber, error) {
    // if there was a pre-existing handler, invoke it here
    var handled = originalOnError && originalOnError(message, url, lineNumber, columnNumber, error);

    // if the pre-existing handler 'handled' the exception we don't need to process it
    if (handled !== true) {
        // otherwise, track in it in the SDK
        appInsights._onerror(message, url, lineNumber, columnNumber, error);
    }

    // On windows if window.onerror returns true, the application exits immediately
    // so to properly report an exception we need to return true here
    return (cordova.platformId === 'windows' || cordova.platformId === 'windows8') ? true : handled;
};

module.exports = appInsightsConfig;
