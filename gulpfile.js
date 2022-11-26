"use strict"
const { series } = require('gulp');
const browsersync = require("browser-sync").create();
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');
const jsmin = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const cssmin = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const imagesmin = require('gulp-imagemin');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");


const path = {
  src: {
    root: "./src",
    scss: "./src/scss",
    js: "./src/js",
    img: "./src/img/**",
    html: "./*.html",
  },

  dist: {
    root: "./dist",
    css: "./dist",
    js: "./dist",
    img: "./dist/img",
    html: "./dist",

  },
};


function scripts() {
  return gulp
    .src(`${path.src.js}/*.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Scripts",
          message: error.message,
        })),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(rename({
      basename: "scripts",
      suffix: ".min",
    }))
    .pipe(jsmin())
    .pipe(sourcemaps.write())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browsersync.stream())
}

function scriptsDev() {
  return gulp
    .src(`${path.src.js}/*.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Scripts",
          message: error.message,
        })),
      })
    )
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(rename({
      basename: "scripts",
      suffix: ".min",
    }))
    .pipe(jsmin())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browsersync.stream())
}


function styles() {
  return gulp
    .src(`${path.src.scss}/**/*.scss`)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Styles",
          message: error.message,
        })),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(concat('styles.css'))
    .pipe(rename({
      basename: "styles",
      suffix: ".min",
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(path.dist.css))
}

function stylesDev() {
  return gulp
    .src(`${path.src.scss}/**/*.scss`)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Styles",
          message: error.message,
        })),
      })
    )
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(concat('styles.css'))
    .pipe(rename({
      basename: "styles",
      suffix: ".min",
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(path.dist.css))
}


function images() {
  return gulp
    .src(`${path.src.img}/**/*.{png,jpg,jpeg,gif,svg}`)
    .pipe(newer(path.dist.img))
    .pipe(imagesmin([
      imagesmin.gifsicle({ interlaced: true }),
      imagesmin.mozjpeg({ quality: 75, progressive: true }),
      imagesmin.optipng({ optimizationLevel: 5 })]))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(path.dist.img))
}



function clean()  {
  return del(['dist/*']);
}


function watch() {
  browsersync.init({
    server: {
      baseFile: "./index.html"
    }
  })

  gulp.watch(path.src.scss, styles).on('change', browsersync.reload)
  gulp.watch(path.src.js, scripts).on('change', browsersync.reload)
  gulp.watch(path.src.img, images).on('change', browsersync.reload)
}

const build = series(clean, styles, scripts, images,stylesDev, scriptsDev);
const dev = series(build, watch);

exports.build = build
exports.dev = dev


