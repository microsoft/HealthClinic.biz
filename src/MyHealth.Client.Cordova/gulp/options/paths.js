var variables_path = "./content/styles/base/_variables.scss";

module.exports = {
    site_sass: ['./content/styles/site.scss', variables_path],
    site_sass_to_watch: ['./content/styles/**/*.scss'],
    ionic_sass: ['./content/styles/ionic.scss', variables_path],
    src: {
        images: ['./content/images/**/*.{png,jpg,svg,gif}'],
        templates: ['./content/app/modules/**/*.html'],
        index: ['./content/index.html'],
        libs: [
            './content/lib/ionic/js/ionic.bundle.js',
            './content/lib/jquery/dist/jquery.min.js',
            './content/lib/jquery/dist/jquery.min.map',
            './content/lib/moment/min/moment.min.js',
            './content/lib/es6-promise/promise.min.js'
        ],
        js: ['./content/js/*.*'],
        fonts: ['./content/lib/ionic/fonts/*.{eot,svg,ttf,woff}'],
        icomoon_style: ['./content/icomoon/style.css'],
        icomoon_fonts: ['./content/icomoon/fonts/*.*'],
        typescript: "./content/**/*.ts",
        typescript_lint: ["./content/app/app.ts", "./content/app/modules/**/*.ts"]
    },
    dest: {
        images: './www/images/',
        templates: './www/templates/',
        index: './www/',
        libs: './www/lib/',
        js: './www/js/',
        fonts: './www/fonts/',
        icomoon_style: './www/icomoon/',
        icomoon_fonts: './www/icomoon/fonts/',
        typescript: './www/scripts/'
    }
};