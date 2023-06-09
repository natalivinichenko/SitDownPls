const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image');
const webp = require('gulp-webp');
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create()
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');

const clean = () => {
    return del(['dist'])
}

const isDev = function(){
    return !argv.prod;
}

const isProd = function(){
    return !!argv.prod;
}

const fonts = () => {
    return src('src/fonts/**')
    .pipe(dest('dist/fonts'))
}

const styles = () => {
   return src('src/styles/main.css')
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
        cascade: false
    }))
    .pipe(gulpif(isProd(), cleanCSS({
        level: 2
    })))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist/style'))
    .pipe(browserSync.stream())
}

const stylesVendor = () => {
    return src('src/styles/vendor.css')
     .pipe(gulpif(isDev(), sourcemaps.init()))
     .pipe(concat('vendor.css'))
     .pipe(autoprefixes({
         cascade: false
     }))
     .pipe(gulpif(isProd(), cleanCSS({
         level: 2
     })))
     .pipe(gulpif(isDev(), sourcemaps.write()))
     .pipe(dest('dist/style'))
     .pipe(browserSync.stream())
 }

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/img'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js',
    ])
    .pipe(gulpif(isDev(), sourcemaps.init()))
    .pipe(gulpif(isProd(), babel({
        presets: ['@babel/env']
    })))
    .pipe(webpackStream({
        output: {
          filename: 'app.js',
        },
      }))
    .pipe(concat('app.js'))
    .pipe(gulpif(isProd(), uglify().on('error', notify.onError)))
    .pipe(gulpif(isDev(), sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const webpImages = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.jpeg'
    ])
      .pipe(webp())
      .pipe(dest('dist/img'))
  };


const img = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(gulpif(isProd(), image()))
    .pipe(dest('dist/img'))
}

const imgSvg = () => {
    return src('src/img/**/*.svg')
    .pipe(image())
    .pipe(dest('dist/img'))
}

  const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/main.css', styles)
watch('src/styles/vendor.css', stylesVendor)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/fonts/**', fonts)


exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, fonts, htmlMinify, scripts, styles, stylesVendor, svgSprites, img, webpImages, imgSvg, watchFiles)