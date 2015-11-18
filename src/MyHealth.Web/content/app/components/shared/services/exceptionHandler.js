function ExceptionHandler($injector) {
    'use strict';

    var handledExceptions = [];

    return function(exception) {
        if (handledExceptions.indexOf(exception) === -1) {
            appInsights.trackException(exception);
            $injector.get('toasterService').showServerError();
            handledExceptions.push(exception);
            console.warn('Unhandled Exception', exception);
        }
    };
}

export default ExceptionHandler;