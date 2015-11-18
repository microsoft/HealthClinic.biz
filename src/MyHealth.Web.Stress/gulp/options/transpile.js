var paths = require('./paths');

var options = {
    site: {
        source: paths.source.js,
        target: paths.dest.js + paths.dest.files.js,
        concat: true
    },
    siteMin: {
        source: paths.source.js,
        target: paths.dest.js + paths.dest.files.jsMin,
        concat: true
    }
};

module.exports = options;