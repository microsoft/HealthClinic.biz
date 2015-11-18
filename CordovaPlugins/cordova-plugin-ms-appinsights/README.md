# Application Insights plugin for Apache Cordova apps

This plugin allows you to add an Application Insights to your Apache Cordova app. Application Insights is a techonogy that sends telemetry from your app to the Azure portal.


More info about Application Insights technology could be found [here](http://azure.microsoft.com/en-us/documentation/articles/app-insights-get-started/)

To use this plugin you'll need an account in Microsoft Azure. You might already have access to a group account through your organization, or you might want to get a Pay-as-you-go account. (While Application Insights is in Preview, it's free.)

For more API documentation see [sample application](https://github.com/AzureAD/azure-activedirectory-library-for-cordova/tree/master/sample) and JSDoc for exposed functionality stored in [www](https://github.com/AzureAD/azure-activedirectory-library-for-cordova/tree/master/www) subfolder.

## Supported platforms

  * Android
  * iOS
  * Windows

## Sample usage

Application Insights API is available through `window.appInsights` object. To start using it you don't have to initialize it, just start calling its' methods

```javascript
// This will send a custom-defined event to your appInsights account
var eventData = { ButtonId: "trackSingleEvent", Timestamp: new Date() };
appInsights.trackEvent('click', eventData);

// This will send data about how long some action is performed
appInsights.startTrackEvent("longRunningTask");
// Emulate some long-running action through `setTimeout`
setTimeout(function () {
     // When task is finished, call 'stopTrackEvent' with the same event as in 'startTrackEvent'
    appInsights.stopTrackEvent("longRunningTask");
}, 10000);

// This will send an exception information to your appInsights account
try {
    // Do some logic here which may
    throw new Error("Sample Error");
} catch (err) {
    // Catch an error and send it to appInsights
    appInsights.trackException(err);
}

```

More information about AppInsights API could be found [here](http://azure.microsoft.com/en-us/documentation/articles/app-insights-web-track-usage-custom-events-metrics/)

## Installation Instructions

### Prerequisites

* [NodeJS and NPM](https://nodejs.org/)

* [Cordova CLI](https://cordova.apache.org/)

  Cordova CLI can be easily installed via NPM package manager: `npm install -g cordova`

* Additional prerequisites for each target platform can be found at [Cordova platforms documentation](http://cordova.apache.org/docs/en/edge/guide_platforms_index.md.html#Platform%20Guides) page.

### To build and run sample application

  * Clone this repository into a directory of your choice

    `git clone https://github.com/MSOpenTech/cordova-plugin-appinsights.git`

  * Create a cordova project and add the platforms you want to support

    `cordova create AppInsightsSample --copy-from="cordova-plugin-appinsights/sample"`

    `cd AppInsightsSample`

    `cordova platform add android`

    `cordova platform add windows`

    `cordova platform add ios`

  * Add the plugin to your project

    `cordova plugin add ../cordova-plugin-appinsights --variable INSTRUMENTATION_KEY=<your_key>`
    
  * Set up intrumentation key for AppInsights API. Modify the following line in `config.xml` file at the project root

    `<preference name="instrumentation_key" value="$INSTRUMENTATION_KEY">`

  replace `$INSTRUMENTATION_KEY` with your key.

  * _optional_: install battery and network status plugins to track their events to AppInsights as well.

    `cordova plugin add cordova-plugin-battery-status cordova-plugin-network-information`

  * Build and run application: `cordova run`.

## Copyrights ##

Copyright (c) Microsoft Open Technologies, Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
