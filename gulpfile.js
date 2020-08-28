const fs = require('fs');
const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean'); ``

function preBuild(next) {
  if (fs.existsSync('./dist')) {
    return src('./dist/', { read: false })
      .pipe(clean());
  } else {
    return next();
  }
}

function moveIndexHTML() {
  return src('./src/index.html')
    .pipe(dest('dist/'));
}

function minifyCSS() {
  return src('./src/**/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('dist/'));
}

function moveJS() {
  return src('./src/**/*.js')
    .pipe(dest('./dist/'));
}

exports.default = series(
  preBuild,
  minifyCSS,
  moveJS,
  moveIndexHTML,
);