const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const cleanCSS = require("gulp-clean-css");
// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
});
// Копирование изображений
gulp.task('images', function() {
    return gulp.src('./src/image/*.+(jpg|png|webp)')
      .pipe(gulp.dest('./dist/images'));
  });
  
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify()) // минификация JavaScript
        .pipe(rename({ suffix: '.min' })) // добавление суффикса .min к минифицированным файлам
        .pipe(gulp.dest('dist')); // сохранение результатов в директорию dist
    });
gulp.task("styles", function () {
  return gulp.src("./src/sass/*.sass/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("./src/sass/*.sass/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});
gulp.task("default", gulp.parallel("watch", "server", "styles", "scripts", "images"));
