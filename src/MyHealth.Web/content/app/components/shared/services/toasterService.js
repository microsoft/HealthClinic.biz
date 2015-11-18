function ToasterService(toaster) {
    'use strict';

    return {
        showServerError
    };

    function showServerError() {
        toaster.pop('error', 'Error', 'Oops! Something went wrong!');
    }
}

export default ToasterService;