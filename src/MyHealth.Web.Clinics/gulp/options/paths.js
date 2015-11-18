var paths = {
    css: {
        source : "./public/styles/**/*.scss",
        dest: "./public/styles"
    },
    ts: {
        source : "./public/app/**/*.ts",
        destFile: "app.js",
        destPath: "./public/app"
    }
};

module.exports = paths;