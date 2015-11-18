interface config {
    /**
    * Sets the instrumentation key
    */
    instrumentationKey: string;

    /**
    *  Expedits telemetry so that results can be seen immediately (Use this during debugging).
    */
    enableDebug: boolean;
}

/**
* Application Insights instance
*/
interface appInsights {
    config: config;

    /**
     * Starts timing how long the user views a page or other item. Call this when the page opens.
     * This method doesn't send any telemetry. Call {@link stopTrackTelemetry} to log the page when it closes.
     * @param   name  A string that idenfities this item, unique within this HTML document. Defaults to the document title.
     */
    startTrackPage(name?: string): void;
    /**
     * Logs how long a page or other item was visible, after {@link startTrackPage}. Call this when the page closes.
     * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
     * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
     * @param   properties {key : 'value'} - additional data used to filter pages and metrics in the portal. Defaults to empty.
     * @param   measurements {key : 'value'} - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    stopTrackPage(name?: string, url?: string, properties?: Object, measurements?: Object): void;
    /**
     * Logs that a page or other item was viewed.
     * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
     * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
     * @param   properties  {key : 'value'} - additional data used to filter pages and metrics in the portal. Defaults to empty.
     * @param   measurements    {key : 'value'} - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object): void;
    /**
     * Start timing an extended event. Call {@link stopTrackEvent} to log the event when it ends.
     * @param   name    A string that identifies this event uniquely within the document.
     */
    startTrackEvent(name: string): void;
    /**
     * Log an extended event that you started timing with {@link startTrackEvent}.
     * @param   name    The string you used to identify this event in startTrackEvent.
     * @param   properties  {key : 'value'} - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param   measurements    {key : 'value'} - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    stopTrackEvent(name: string, properties?: Object, measurements?: Object): void;
    /**
     * Log a user action or other occurrence.
     * @param   name    A string to identify this event in the portal.
     * @param   properties  {key : 'value'} - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param   measurements    {key : 'value'} - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    trackEvent(name: string, properties?: Object, measurements?: Object): void;
    /**
     * Log an exception you have caught.
     * @param   exception   An Error from a catch clause, or the string error message.
     * @param   properties  {key : 'value'} - additional data used to filter events and metrics in the portal. Defaults to empty.
     * @param   measurements    {key : 'value'} - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
     */
    trackException(exception: Error, handledAt?: string, properties?: Object, measurements?: Object): void;
    /**
     * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
     * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the
     * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
     * @param   name    A string that identifies the metric.
     * @param   average Number representing either a single measurement, or the average of several measurements.
     * @param   sampleCount The number of measurements represented by the average. Defaults to 1.
     * @param   min The smallest measurement in the sample. Defaults to the average.
     * @param   max The largest measurement in the sample. Defaults to the average.
     */
    trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number): void;
}

interface Window {
    /**
    * Application Insights instance
    */
    appInsights: appInsights;
}

declare var appInsights: appInsights;