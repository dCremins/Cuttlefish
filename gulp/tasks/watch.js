// /gulp/tasks/watch.js
var gulp = require('gulp');

gulp.task('ghost', ['ghost:start'], function (callback) {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch('app/**/*.hbs', ['browsersync:reload']);
  gulp.watch('css/**/*.css',['browsersync:reload']);
  callback();
});
