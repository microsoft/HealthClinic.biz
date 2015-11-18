/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global appInsights */

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', function () {
            app.bindEvents();
            app.onDeviceReady();
        });
    },

    // Bind Event Listeners
    bindEvents: function () {

        var batteryEvents = ["batterystatus", "batterycritical", "batterylow"];
        var networkEvents = ["online", "offline"];

        // bind battery and network status event handlers
        batteryEvents.concat(networkEvents).forEach(function (eventname) {
            document.addEventListener(eventname, function (event) {
                // track each event to AppInsights API
                appInsights.trackEvent(eventname, event);
            });
            app.log('Bound listener for ' + eventname);
        });

        // Bind battery level to app object property to be able to track it as app metric
        document.addEventListener('batterystatus', function(evt) {
            app.batteryLevel = evt.level;
        });

        document.getElementById('trackSingleEvent').addEventListener('click', function () {
            app.log("Button 'trackSingleEvent' clicked");

            var eventData = { ButtonId: "trackSingleEvent", Timestamp: new Date() };
            appInsights.trackEvent('click', eventData);
        });

        document.getElementById('trackTimedEvent').addEventListener('click', function() {
            app.log("Button 'trackTimedEvent' clicked");

            appInsights.startTrackEvent("timeout");
            var timeout = Math.random(5000, 10000);
            setTimeout(function () {
                var eventData = { ButtonId: "trackTimedEvent", Timestamp: new Date(), TrackedTimeout: timeout };
                appInsights.stopTrackEvent("timeout", eventData);
            }, timeout);
        });

        document.getElementById('trackMetric').addEventListener('click', function() {
            app.log("Button 'trackMetric' clicked");
            appInsights.trackMetric('battery', app.batteryLevel || null );
        });

        document.getElementById('trackException').addEventListener('click', function () {
            app.log("Button 'trackException' clicked");

            try {
                throw new Error("Sample Error");
            } catch (err) {
                appInsights.trackException(err);
            }
        });

        function toggleMenu() {
            // menu must be always shown on desktop/tablet
            if (document.body.clientWidth > 600) return;
            var cl = document.body.classList;
            if (cl.contains('left-nav')) { cl.remove('left-nav'); }
            else { cl.add('left-nav'); }
        }

        document.getElementById('slide-menu-button').addEventListener('click', toggleMenu);
    },

    // deviceready Event Handler
    onDeviceReady: function () {

        appInsights.trackPageView();
        var eventData = { Timestamp: new Date() };
        appInsights.trackEvent('deviceready', eventData);
        app.log("Cordova initialized, 'deviceready' event was fired");

    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Logs data to application's log area and AppEvents endpoint
    log: function (message, isError) {

        if (!app.logArea) app.logArea = document.getElementById("log-area");

        if (app.logArea) {
            isError ? console.error(message) : console.log(message);
            var logItem = document.createElement('li');
            logItem.classList.add("topcoat-list__item");
            isError && logItem.classList.add("error-item");
            var timestamp = new Date().toLocaleTimeString();
            logItem.innerHTML = ('<span class="timestamp">' + timestamp + ': </span>' + message);
            app.logArea.insertBefore(logItem, app.logArea.firstChild);
            appInsights.trackTrace(message, { Verbosity: isError ? "error" : "verbose", Timestamp: timestamp });
        }
    },

    error: function (message) {
        app.log(message, true);
    }
};
