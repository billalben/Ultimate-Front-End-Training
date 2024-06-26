const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const browsersync = require("browser-sync").create();

function htmlTask() {
  return src("./app/html/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./dist"));
}

// scss Task
function scssTask() {
  return src("./app/css/**/*.scss", {
    sourcemaps: true,
  })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(concat("main.min.css"))
    .pipe(dest("./dist/css", { sourcemaps: "." }));
}

// js Task
function jsTask() {
  return src(["./app/js/main.js", "./app/js/fullScreen.js"], { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(dest("./dist/js", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// watch Task
function watchTask() {
  watch("./dist/*.html", browserSyncReload);
  watch(
    ["./app/html/**/*.pug", "./app/css/**/*.scss", "./app/js/*.js"],
    series(htmlTask, scssTask, jsTask, browserSyncReload)
  );
}

exports.default = series(
  htmlTask,
  scssTask,
  jsTask,
  browserSyncServe,
  watchTask
);

exports.build = series(htmlTask, scssTask, jsTask);
