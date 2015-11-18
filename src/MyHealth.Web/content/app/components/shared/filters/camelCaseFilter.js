function CamelCaseFilter() {
    'use strict';
    return function(input) {
        if (!input) {
            return input;
        }

        let list = input.match(/[A-Za-z][a-z]*/g);

        if (!list) {
            return input;
        }
        let result = list.join(' ');
        result = result.substr(0, 1).toUpperCase() + result.substr(1);
        return result;
    };
}

export default CamelCaseFilter;