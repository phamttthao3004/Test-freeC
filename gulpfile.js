const gulp = require("gulp");

const less = require("gulp-less");

const LessAutoprefix = require("less-plugin-autoprefix");

const gulpsync = require("gulp-sync")(gulp);

const autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

gulp.task("less", function () {
  return gulp
    .src("./src/styles/style.less")
    .pipe(
      less({
        plugins: [autoprefix],
      })
    )
    .pipe(gulp.dest("./src/styles"));
});

// END Deloy to production
gulp.task("watch", gulpsync.sync(["less"]), function () {
  gulp.watch(["./src/styles/**"], ["less"]);
});

gulp.task("default", ["watch"]);
