const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');

function style(){
    return src('./scss/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('./css/'))
        .pipe(browserSync.stream());
}

function watcher(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./scss/**/*.scss', style);
    watch('./*.html').on('change', browserSync.reload);
    watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watcher = watcher;