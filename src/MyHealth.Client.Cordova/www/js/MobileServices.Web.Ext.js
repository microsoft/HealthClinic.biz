/*
 * Copyright (c) Microsoft Corporation. All rights reserved
 */

// polyfill for Mobile Services Web SDK to work on Ripple emulator

function restoreOriginalWindowOpen() {
    // if our module is called before InAppBrowser
    cordova.define.remove("org.apache.cordova.inappbrowser.inappbrowser");
    cordova.define("org.apache.cordova.inappbrowser.inappbrowser", function(require, exports, module) {
        module.exports = window.open;
    });
    // if our module is called after InAppBrowser
    var modulemapper = require('cordova/modulemapper');
    var origOpenFunc = modulemapper.getOriginalSymbol(window, 'window.open');
    if (origOpenFunc) {
        window.open = origOpenFunc;
    }
}

// special patch to correctly work on Ripple emulator
if (window.parent && !!window.parent.ripple) { // alternative way: https://gist.github.com/triceam/4658021
    restoreOriginalWindowOpen();
}