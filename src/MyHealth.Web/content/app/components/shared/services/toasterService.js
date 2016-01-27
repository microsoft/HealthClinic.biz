function ToasterService(toaster) {
    'use strict';

    return {
        showServerError
    };

    function showServerError(error) {
        toaster.pop('error', 'Error', (typeof error === 'string' && error) ? error : 'Oops! Something went wrong!');
    }
}

export default ToasterService;