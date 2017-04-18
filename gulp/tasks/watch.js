// /gulp/tasks/watch.js
var gulp = require('gulp');

gulp.task('ghost', ['ghost:start'], function (callback) {
  gulp.watch('app/assets/sass/**/*.scss',['styles']);
  gulp.watch('app/**/*.hbs', ['browsersync:reload']);
  gulp.watch('app/assets/css/**/*.css',['browsersync:reload']);
  callback();
});
