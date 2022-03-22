const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");


// CSS task
function css() {
  return gulp
    .src("./public/styles/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./public/styles/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./public/styles/"));
}


// Watch files
function watchFiles() {
  gulp.watch("./public/styles/**/*.scss", css);
}


const watch = gulp.parallel(watchFiles);

exports.watch = watch;
exports.default = watch;