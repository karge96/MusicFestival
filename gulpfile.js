const { series, src, dest,watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
// utilidades
const autoprefixer = require ('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// utilidades js
const terser = require('gulp-terser-js');
const rename =require('gulp-rename');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}
function css () {
    return src(paths.scss)
    .pipe(sourcemaps.init() )
    .pipe ( sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe( sourcemaps.write('.'))
    .pipe( dest("./build/css"))
}
function minificarcss() {
    return src(paths.scss)
    .pipe ( sass({ 
        outputStyle: 'expanded'
    }))
    .pipe( dest("./build/css"))
}
function jota () {
    return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe( concat('bundle.js') )
    .pipe(terser ())
    .pipe(sourcemaps.write('.'))
    .pipe( rename({ suffix: '.min'}))
    .pipe( dest('./build/js'))
    
}

function imagenes (){
    return src(paths.imagenes)
    .pipe( imagemin() )
    .pipe( dest('./build/img') )
    .pipe( notify({ message: 'imagen minificada'}))
}
function versionwebp(){
    return src(paths.imagenes)
    .pipe( webp())
    .pipe(dest('./build/img'))
    .pipe( notify({message: 'versión webp lista'}))
}
function watchArchivos(){
    watch( paths.scss, css);
    watch(paths.js, jota);
}
exports.css =css;
exports.imagenes= imagenes;
exports.watchArchivos = watchArchivos;
exports.versionwebp= versionwebp;
exports.minificarcss= minificarcss;
exports.jota= jota;

exports.default = series( css, imagenes, jota, versionwebp, watchArchivos);
