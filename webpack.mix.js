const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.ts("resources/assets/ts/app.ts", "public/js")
    .sass("resources/assets/sass/app.scss", "public/css")
    .browserSync({
        proxy: {
            target: "http://127.0.0.1:8000"
        },
        files: [
            "./resources/**/*",
            "./app/**/*",
            "./config/**/*",
            "./routes/**/*",
            "./public/**/*"
        ],
        open: false,
        reloadOnRestart: true
    });
